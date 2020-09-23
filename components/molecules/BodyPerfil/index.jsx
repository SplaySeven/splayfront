import React from 'react';
import Header from '../BodyPerfil/Header';

//<Header userId={props} />
export default function index(props) {
	return (
		<section>
			<Header userId={props} />
		</section>
	);
}
