import React from 'react';
import ContainerButtonsPortada from '../../../../molecules/ContainerButtonsPortada';
import styled from 'styled-components';
export default function index(props) {
	const { data } = props;
	return (
		<PortSection2>
			<ContainerButtonsPortada data={data} />
		</PortSection2>
	);
}
const PortSection2 = styled.section`width: 20%;`;
