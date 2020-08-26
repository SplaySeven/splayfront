import React from 'react';
import ButtonPortada from '../../atoms/ButtonPortada';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
export default function index(props) {
	const userId = props.data.userId;
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: userId }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return <ButtonPortada data={props} type={getUser.type} />;
}
