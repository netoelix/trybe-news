import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { allNewsReducer, newsReducer, releaseReducer } from './reducers/reducer';

export const reducer = combineReducers({
  allNews: allNewsReducer,
  news: newsReducer,
  release: releaseReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
