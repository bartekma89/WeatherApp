import React from 'react';

const WeatherPropsComponent = props => {
	const { name, country } = props.weather.location;
	return (
			<div>
				<div>Location: {name}, {country}</div>
			</div>
		)
}

export default WeatherPropsComponent;