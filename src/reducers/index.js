import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';

const rootReducers = combineReducers({
	weatherStore: weatherReducer,
});

export default rootReducers;
