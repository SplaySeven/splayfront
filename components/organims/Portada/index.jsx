import React from 'react';
import styled from 'styled-components';
import ButtonPortada from '../../atoms/ButtonPortada';
import ImgPortada from '../../atoms/ImagenPortada';
import { row, container } from '../../../styles/styles';
export default function index(props) {
	return (
		<React.Fragment>
			<Row>
				<Container3>
					<Row>
						<ImgPortada userId={props} />
						<ButtonPortada data={props} />
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
