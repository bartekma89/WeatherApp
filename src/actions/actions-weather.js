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
	const properties = {
		sunset: new Date(data.sys.sunset * 1000),
		sunrise: new Date(data.sys.sunrise * 1000),
		humidity:data.main.humidity,
		pressure: data.main.pressure
	}

	const description = {
		mainDesc: data.weather[0].main,
		description: data.weather[0].description,
		icon: data.weather[0].icon,
		date: new Date(data.dt * 1000)
	}

	const temperature = {
		current: data.main.temp,
		minimum: data.main.temp_min,
		maximum: data.main.temp_max,
	}

	const location = {
		name: data.name,
		country: data.sys.country,
		longitude: data.coord.lon,
		latitude: data.coord.lat,
	}
	const weatherProperties = {
			location,
			temperature,
			description,
			properties
	}
	return {
		type: GET_WEATHER_SUCCESS,
		payload: {
			data: weatherProperties,
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
