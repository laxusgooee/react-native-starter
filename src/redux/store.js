import {applyMiddleware, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import middleware from './middleware';
import reducer from './reducer';


const persistConfig = {
  key: 'root',
  storage,
}

// create the store
const store = createStore(
  persistReducer(persistConfig, reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);


export default () => {
  let store = store
  let persistor = persistStore(store)
  return { store, persistor }
}
