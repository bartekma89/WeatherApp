import { combineReducers } from 'redux';

import { weatherReducer } from './weatherReducers';

const rootReducers = combineReducers({
	weatherStore: weatherReducer,
});

export default rootReducers;
