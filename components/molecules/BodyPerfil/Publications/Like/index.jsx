import React from 'react';
import { useQuery } from '@apollo/client';
import { COUNT_LIKES } from '../../../../../gql/like';

export default function index(props) {
	const { publication } = props;

	const { data, loading } = useQuery(COUNT_LIKES, {
		variables: { idPublication: publication.id }
	});

	if (loading) return null;
	const { countLikes } = data;

	return (
		<React.Fragment>
			{countLikes} {countLikes === 1 ? 'Like' : 'Likes'}
		</React.Fragment>
	);
}
