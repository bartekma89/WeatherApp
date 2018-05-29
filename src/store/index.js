import { createStore, applyMiddleware } from 'redux';
import weatherReducer from '../reducers/weatherReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const store = createStore(weatherReducer, middleware);

export default store;
