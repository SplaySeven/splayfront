import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { COUNT_COMMENTS } from '../../../../../gql/comment';
import styled from 'styled-components';

export default function index(props) {
	const { publication } = props;

	const { data, loading, startPolling, stopPolling } = useQuery(COUNT_COMMENTS, {
		variables: { idPublication: publication.id }
	});
	useEffect(
		() => {
			startPolling(1000);
			return () => {
				stopPolling();
			};
		},
		[ stopPolling, stopPolling ]
	);

	if (loading) return null;
	const { countComments } = data;
	return (
		<div>
			<ParrafoStyled>{countComments} Comentarios </ParrafoStyled>
		</div>
	);
}

const ParrafoStyled = styled.span`
	color: white;
	font-weight: bold;
`;
