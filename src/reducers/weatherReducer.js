import {
	GET_WEATHER_START,
	GET_WEATHER_SUCCESS,
	GET_WEATHER_ERROR,
} from '../constants';

const initialState = {
	weather: [],
	isLoading: false,
	isError: false,
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_WEATHER_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_WEATHER_SUCCESS:
			return {
				...state,
				weather: action.payload.data,
				isLoading: false,
			};
		case GET_WEATHER_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};

export default weatherReducer;
