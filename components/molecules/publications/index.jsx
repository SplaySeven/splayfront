import React from 'react';
import Home from '../publications/publication/Home';
import Wall from '../publications/publication/Wall';
import Follow from '../publications/publication/Follow';
export default function index(props) {
	const { origen } = props;

	return (
		<React.Fragment>
			{origen === 'H' && <Home />}
			{origen === 'W' && <Wall dato={props} />}
			{origen === 'F' && <Follow dato={props} />}
		</React.Fragment>
	);
}
