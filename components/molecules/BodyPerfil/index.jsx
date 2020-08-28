import React from 'react';
import Header from '../BodyPerfil/Header';
import Publications from '../BodyPerfil/Publications';
export default function index(props) {
	return (
		<React.Fragment>
			<Header userId={props} />
		</React.Fragment>
	);
}
