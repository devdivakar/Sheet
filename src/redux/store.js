import { applyMiddleware, createStore } from 'redux';
import  logger  from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';



const getMiddleware = () => {
  return process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : applyMiddleware(thunk)
};

export const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));
export default { store, persistor };
