import React from 'react';
import WeatherDashboard from './container/WeatherDashboard';
import Header from './presentation/HeaderComponent';
import Form from './presentation/FormComponent';

const App = () => {
	return (
		<div>
			<Header />
			<Form />
			<WeatherDashboard />
		</div>
	);
};

export default App;
