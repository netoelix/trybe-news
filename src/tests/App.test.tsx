import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
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

describe('Testes das funções da API', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataAllNews, <App />);
  });
  afterEach(() => vi.clearAllMocks());

  it('Testa a função getAllNews', async () => {
    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });

  it('Testa a função getNews', async () => {
    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });

  it('Testa a função getRelease', async () => {
    const news = await screen.findByText('Teste 1');
    expect(news).toBeInTheDocument();
  });
});

describe('Testes do componente Section', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataAllNews, <Section />);
  });
  it('Testa se a primeira noticia possui o texto notícia mais recente', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    expect(await screen.findByText(/notícia mais recente/i)).toBeInTheDocument();
    expect(await screen.findByText(/leia a notícia aqui/i)).toBeInTheDocument();
  });
  it('Testa se o botão leia a noticia aqui existe', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    const link = screen.getByText(/leia a notícia aqui/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'www.link.com');
  });
  it('Testa se o botão favoritos existe e se a imagem é trocada ao clicar', async () => {
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

describe('Testes do botão Mais Recentes', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataAllNews, <App />);
  });
  it('Testa se o botão Mais Recentes funciona', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });
    const btn = screen.getByTestId('recent-btn');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Teste dataAllNews 1')).toBeInTheDocument();
  });
});

describe('Testes do botão Release', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataRelease, <App />);
  });
  it('Testa se o botão Release funciona', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });
    const btn = screen.getByTestId('release-btn');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Teste dataRelease 1')).toBeInTheDocument();
  });
});

describe('Testes do botão Notícia', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataNews, <App />);
  });
  it('Testa se o botão Notícia funciona', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });
    const btn = screen.getByTestId('news-btn');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText('Teste dataNews 3')).toBeInTheDocument();
  });
});

describe('Testes do botão Favoritos', () => {
  beforeEach(() => {
    mockFetchApi = setupFetchMockAndRender(dataAllNews, <App />);
    localStorage.clear();
  });
  it('Testa se o botão Favoritos funciona', async () => {
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });
    const btn = screen.getByTestId('favorite-page-btn');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);

    expect(screen.getByText('Nenhum favorito encontrado')).toBeInTheDocument();

    const btnRecent = screen.getByTestId('recent-btn');
    expect(btnRecent).toBeInTheDocument();

    await userEvent.click(btnRecent);
    await waitFor(() => {
      expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument();
    }, { timeout: 5000 });

    const image = await screen.findAllByTestId('favorite-btn');

    await userEvent.click(image[1]);
    await userEvent.click(image[2]);

    await userEvent.click(btn);

    expect(screen.getByText('Teste dataAllNews 2')).toBeInTheDocument();
    expect(screen.getByText('Teste dataAllNews 3')).toBeInTheDocument();
  });
});
