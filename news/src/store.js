import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);

export default store;
