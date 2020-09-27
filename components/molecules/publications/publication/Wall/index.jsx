import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS } from '../../../../../gql/publication';

import { map } from 'lodash';
import Publication from '..';
export default function index(props) {
	const { userId } = props.dato.data;

	const { data, loading, startPolling, stopPolling } = useQuery(GET_PUBLICATIONS, {
		variables: {
			id: userId
		}
	});

	useEffect(
		() => {
			startPolling(1000);
			return () => {
				stopPolling;
			};
		},
		[ startPolling, stopPolling ]
	);

	if (loading) return null;
	const { getPublications } = data;
	return (
		<section>
			{map(getPublications, (publication, index) => (
				<section key={index}>
					<Publication publication={publication} origen={'W'} />
				</section>
			))}
		</section>
	);
}
