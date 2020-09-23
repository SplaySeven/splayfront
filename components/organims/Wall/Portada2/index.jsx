const { ref } = require('yup');

import React from 'react';
import BodyPerfil from '../../../molecules/BodyPerfil';
//<BodyPerfil userId={data} />
export default function index(props) {
	const { data } = props;
	return (
		<section>
			<BodyPerfil userId={data} />
		</section>
	);
}
