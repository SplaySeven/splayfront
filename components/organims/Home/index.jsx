import React from 'react';
import styled from 'styled-components';

import { row, px0, pr0, container, colmd2, colmd3, colmd9, textcenter } from '../../../styles/styles';
import SidebarLeft from '../Home/sidebarLeft';
import Portada from '../Home/portada';
import Publications from '../Home/Publications';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';

export default function index(props) {
	const { auth } = props;
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: auth.id }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<React.Fragment>
			<Row>
				<Container4>
					<Row>
						<SidebarLeft getUser={getUser} />
						<Colmd9A>
							<Colmd9Aa>
								<Portada getUser={getUser} />

								<Publications getUser={getUser} />
							</Colmd9Aa>
						</Colmd9A>
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

const Colmd9Aa = styled.div`
	background: #00a79d;
	height: 100px;
	padding-top: 1.5rem !important;
	margin-top: .5rem !important;
	box-sizing: border-box;
`;

const Colmd3A = styled.div`${colmd3} ${px0} background: #00a79d;`;
const Colmd9A = styled.div`${colmd9} ${pr0};`;

const Container4 = styled.div`
	${container} background: #C4E0DD;
	padding: 0px;
`;

const Colmd2A = styled.div`${colmd2} ${textcenter};`;
