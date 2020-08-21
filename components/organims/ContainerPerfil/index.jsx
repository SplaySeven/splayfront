import React from 'react';
import styled from 'styled-components';
import SideBarLeftPerfil from '../../molecules/SidebarLeftPerfil';
import BodyPerfil from '../../molecules/BodyPerfil';
import { row, container } from '../../../pages/styles';
export default function index(props) {
	return (
		<React.Fragment>
			<Row>
				<Container4>
					<Row>
						<SideBarLeftPerfil userId={props} />
						<BodyPerfil userId={props} />
					</Row>
				</Container4>
			</Row>
		</React.Fragment>
	);
}

const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Container4 = styled.div`
	${container} background: #C4E0DD;
	padding: 0px;
`;
