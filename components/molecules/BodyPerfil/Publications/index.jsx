import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS } from '../../../../gql/publication';
import { map } from 'lodash';
import PreviewPublication from '../Publications/PreviewPublication';
export default function index(props) {
	const { getUser } = props;
	const { data, loading, startPolling, stopPolling } = useQuery(GET_PUBLICATIONS, {
		variables: {
			id: getUser.id
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
		<div>
			{map(getPublications, (publication, index) => (
				<div key={index}>
					<PreviewPublication publication={publication} />
				</div>
			))}
		</div>
	);
}
