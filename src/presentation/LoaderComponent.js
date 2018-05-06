import React from 'react';

const Loader = props => {
	if (props.isLoading) {
		return <h2>Loading...</h2>;
	} else {
		return props.children;
	}
};

export default Loader;
