import React from 'react';
import styled from 'styled-components';
import ContainerButtonsPortada from '../../molecules/ContainerButtonsPortada';
import ImgPortada from '../../atoms/ImagenPortada';
import { row, container } from '../../../styles/styles';
export default function index(props) {
	console.log(props);
	return (
		<React.Fragment>
			<Row>
				<Container3>
					<Row>
						<ImgPortada userId={props} />
						<ContainerButtonsPortada data={props} />
					</Row>
				</Container3>
			</Row>
		</React.Fragment>
	);
}

const Container3 = styled.div`
	${container} background: #00a79d;
	padding: 0px;
`;
const Row = styled.div`
	box-sizing: border-box;
	${row};
`;
