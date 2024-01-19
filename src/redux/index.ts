import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';

const reducer = combineReducers({
  reducers,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
