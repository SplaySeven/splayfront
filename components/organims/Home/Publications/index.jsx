import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS_FOLLOWEDS_FRIENDS } from '../../../../gql/publication';

import { map } from 'lodash';
import Publication from './Publication';
export default function index() {
	const { data, loading, startPolling, stopPolling } = useQuery(GET_PUBLICATIONS_FOLLOWEDS_FRIENDS);

	if (loading) return null;

	const { getPublicationsFollersFriends } = data;

	return (
		<div>
			{map(getPublicationsFollersFriends, (publication, index) => (
				<div key={index}>
					<Publication publication={publication} />
				</div>
			))}
		</div>
	);
}
