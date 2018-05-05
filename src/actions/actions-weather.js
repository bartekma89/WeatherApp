import {
	GET_WEATHER_START,
	GET_WEATHER_SUCCES,
	GET_WEATHER_ERROR,
} from '../constants';

export function getWeatherStart() {
	return {
		type: GET_WEATHER_START,
	};
}

export function getWeatherSuccess(data) {
	return {
		type: GET_WEATHER_SUCCES,
		payload: {
			data,
		},
	};
}

export function getWeatherError(error) {
	return {
		type: GET_WEATHER_ERROR,
		payload: {
			error,
		},
	};
}
