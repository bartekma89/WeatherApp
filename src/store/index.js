import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducers, middleware);

export default store;
