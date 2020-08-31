import React from 'react';
import Header from '../BodyPerfil/Header';

export default function index(props) {
	return (
		<React.Fragment>
			<Header userId={props} />
		</React.Fragment>
	);
}
