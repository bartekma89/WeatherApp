import { GET_WEATHER } from '../constants';

const initialState = {
	weather = []
}

const weatherReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_WEATHER:
			return {
				...state, weather
			}
	}
}

export default weatherReducer;