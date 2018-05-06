import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/actions-weather';
import Loader from '../presentation/LoaderComponent';

class WeatherDashboard extends Component {
	componentDidMount() {
		this.props.getWeather();
	}

	render() {
		const list = (
			<ul>
				<li>{this.props.properties.name}</li>
				<li>{this.props.properties.base}</li>
				<li>{this.props.properties.visibility}</li>
				<li>{this.props.propertiesMore.temp}</li>
			</ul>
		);

		return (
			<div>
				<Loader isLoading={this.props.isLoading}>
					{!this.props.isError ? list : <h3>404 page not found</h3>}
				</Loader>
			</div>
		);
	}
}

const mapsStateToProps = store => {
	return {
		...store,
		properties: store.weatherStore.weather,
		propertiesMore: store.weatherStore.weather.main,
		isLoading: store.weatherStore.isLoading,
		isError: store.weatherStore.isError,
	};
};

const mapsStateToDispatch = dispatch => {
	return {
		getWeather: () => dispatch(getWeather()),
	};
};

export default connect(mapsStateToProps, mapsStateToDispatch)(WeatherDashboard);
