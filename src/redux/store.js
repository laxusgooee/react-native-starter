import {applyMiddleware, createStore} from 'redux';
import middleware from './middleware';
import reducer from './reducer';


// create the store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);

export default store;
