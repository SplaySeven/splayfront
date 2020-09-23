import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { COUNT_COMMENTS } from '../../../../../gql/comment';
import styled from 'styled-components';

export default function index(props) {
	const { publication } = props;

	const { data, loading, startPolling, stopPolling, refetch } = useQuery(COUNT_COMMENTS, {
		variables: { idPublication: publication.id }
	});

	useEffect(
		() => {
			startPolling(5000);
			return () => {
				stopPolling;
			};
		},
		[ startPolling, stopPolling ]
	);

	if (loading) return null;
	const { countComments } = data;
	return (
		<React.Fragment>
			<ParrafoStyled>
				<A>{countComments} Comentarios </A>
			</ParrafoStyled>
		</React.Fragment>
	);
}

const ParrafoStyled = styled.span`
	color: white;
	font-weight: bold;
	padding-left: 3px;
`;
const A = styled.a`@media (max-width: 768px) {font-size: 8px;}`;
