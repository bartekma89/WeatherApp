import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/actions-weather';

class Form extends React.Component {
	onGetWeather(event) {
		event.preventDefault();
		let city = document.getElementById('city').value;
		let country = document.getElementById('country').value;
		this.props.getWeather(city, country);
	}

	render() {
		return (
			<form onSubmit={this.onGetWeather.bind(this)}>
				<input type="text" id="city" placeholder="City..." />
				<input type="text" id="country" placeholder="Country..." />
				<button>Get Weather</button>
			</form>
		);
	}
}

const mapsStateToProps = store => {
	return {
		...store,
	};
};

const mapsStateToDispatch = dispatch => {
	return {
		getWeather: (city, country) => dispatch(getWeather(city, country)),
	};
};

export default connect(mapsStateToProps, mapsStateToDispatch)(Form);
