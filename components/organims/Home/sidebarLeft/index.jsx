import React from 'react';
import styled from 'styled-components';
import Section1 from '../sidebarLeft/Section1';
import Section2 from '../sidebarLeft/Section2';
import Section3 from '../sidebarLeft/Section3';
import Section4 from '../sidebarLeft/Section4';
import Section5 from '../sidebarLeft/Section5';
import Section6 from '../sidebarLeft/Section6';
export default function index(props) {
	const { getUser } = props;
	return (
		<React.Fragment>
			<Contenedor>
				<Section1 getUser={getUser} />
				<Section2 />
				<Section3 />
				<Section4 getUser={getUser} />
				<Section5 />
				<Section6 />
			</Contenedor>
		</React.Fragment>
	);
}

const Contenedor = styled.div`
	background: #c4e0dd;
	margin: 0px auto;
	height: 1555px;
	@media (max-width: 768px) {
		height: 100px;
	}
`;
