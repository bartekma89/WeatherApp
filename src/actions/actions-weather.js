import {
	GET_WEATHER_START,
	GET_WEATHER_SUCCESS,
	GET_WEATHER_ERROR,
} from '../constants';
import fetch from 'axios';

export function getWeatherStart() {
	return {
		type: GET_WEATHER_START,
	};
}

export function getWeatherSuccess(data) {
	console.log(data);
	return {
		type: GET_WEATHER_SUCCESS,
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

export function getWeather(city = 'Lublin', country) {
	const API_KEY = 'f89c2359f181c84bd499bea487fa668f';
	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

	return dispatch => {
		dispatch(getWeatherStart());

		fetch
			.get(URL)
			.then(response => response.data)
			.then(data => dispatch(getWeatherSuccess(data)))
			.catch(error => dispatch(getWeatherError(error)));
	};
}
