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
