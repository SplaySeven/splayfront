import React from 'react';
import ImgPortada from '../../../../atoms/ImagenPortada';
import styled from 'styled-components';
export default function index(props) {
	const { data } = props;

	return (
		<PortSection1>
			<ImgPortada data={data} />
		</PortSection1>
	);
}

const PortSection1 = styled.section`
	width: 80%;
	@media (max-width: 768px) {
		height: 100px;
		line-height: 100px;
	}
`;
