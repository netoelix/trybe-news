import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import userEvent from '@testing-library/user-event';
import { SpyInstance, vi } from 'vitest';
import { allNewsReducer, newsReducer, releaseReducer } from '../redux/reducers/reducer';
import App from '../App';
import Section from '../components/Section';
import { dataAllNews, dataNews, dataRelease } from '../utils/tests';

const rootReducer = combineReducers({
  allNews: allNewsReducer,
  news: newsReducer,
  release: releaseReducer,
});

const renderWithReduxAndRouter = (component: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined) => {
  return render(
    <Provider store={ store }>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>,
  );
};

const store = createStore(rootReducer, applyMiddleware(thunk));

let mockFetchApi;

const setupFetchMockAndRender = (data, component) => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => data,
  } as Response;

  const mockFetch = vi.spyOn(global, 'fetch').mockImplementation((url) => {
    switch (url) {
      case 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100':
        return Promise.resolve(MOCK_RESPONSE);
      case 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia':
        return Promise.resolve(MOCK_RESPONSE);
      case 'https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release':
        return Promise.resolve(MOCK_RESPONSE);
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  renderWithReduxAndRouter(component);

  return mockFetch;
};

it('Renderiza o titulo da pagina', () => {
  renderWithReduxAndRouter(<App />);

  expect(screen.getByText(/Trybe News/i)).toBeInTheDocument();
});

beforeEach(() => {
  mockFetchApi = setupFetchMockAndRender(dataAllNews, <Section />);
});

describe('Testes do componente Section', () => {
  //   it('Testa se o texto carregando aparece', async () => {
  //     renderWithReduxAndRouter(<Section />);

  //     expect(await screen.findByText(/carregando/i)).toBeInTheDocument();
  //   });
  it('Testa se a primeira noticia possui o texto notícia mais recente', async () => {
    mockFetchApi;
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    expect(await screen.findByText(/notícia mais recente/i)).toBeInTheDocument();
    expect(await screen.findByText(/leia a notícia aqui/i)).toBeInTheDocument();
  });
  it('Testa se o botão leia a noticia aqui existe', async () => {
    mockFetchApi;
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    const link = screen.getByText(/leia a notícia aqui/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'www.link.com');
  });
  it('Testa se o botão favoritos existe e se a imagem é trocada ao clicar', async () => {
    mockFetchApi;
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    const image = screen.getByAltText(/Favorito/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/src/assets/notFavorite.svg');

    await userEvent.click(image);

    expect(image).toHaveAttribute('src', '/src/assets/Favorite.svg');
  });
});

describe('Testes das funções da API', () => {
  afterEach(() => vi.clearAllMocks());

  it('Testa a função getAllNews', async () => {
    mockFetchApi;

    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });

  it('Testa a função getNews', async () => {
    mockFetchApi;

    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });

  it('Testa a função getRelease', async () => {
    mockFetchApi;

    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });
});
