import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/actions-weather';
import Loader from '../presentation/LoaderComponent';
import WeatherProps from '../presentation/WeatherPropsComponent.js'

class WeatherDashboard extends Component {
	componentDidMount() {
		this.props.getWeather();
	}

	render() {
		return (
			<div>
				<Loader isLoading={this.props.isLoading}>
					{!this.props.isError ? <WeatherProps weather={this.props.weather}/> : <h3>404 page not found</h3>}
				</Loader>
			</div>
		);
	}
}

const mapsStateToProps = store => {
	return {
		...store,
		isLoading: store.isLoading,
		isError: store.isError,
	};
};

const mapsStateToDispatch = dispatch => {
	return {
		getWeather: () => dispatch(getWeather()),
	};
};

export default connect(mapsStateToProps, mapsStateToDispatch)(WeatherDashboard);
