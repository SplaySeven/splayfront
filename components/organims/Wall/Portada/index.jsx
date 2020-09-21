import React from 'react';
import styled from 'styled-components';

import Section1 from '../Portada/Section1';
import Section2 from '../Portada/Section2';

export default function index(props) {
	const { data } = props;

	return (
		<React.Fragment>
			<Portada>
				<Section1 data={data} />
				<Section2 data={data} />
			</Portada>
		</React.Fragment>
	);
}

const Portada = styled.section`
	display: flex;
	width: 100%;
	background: #00a79d;
	height: 200px;
	line-height: 200px;
	@media (max-width: 768px) {
		height: 100px;
	}
`;
