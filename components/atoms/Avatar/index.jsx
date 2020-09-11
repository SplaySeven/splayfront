import React from 'react';
import { getToken, decodeToken, removeToken } from '../../../utils/token';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';

export default function Logo1() {
	const token = decodeToken(getToken());

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: token.id }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<DivphotoProfile>
			<Photoprofile getUser={getUser} />
		</DivphotoProfile>
	);
}

const DivphotoProfile = styled.div`
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 48px 48px;
	padding: 6px;
`;
const Photoprofile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
border-radius: 50%;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
width:37px;
height:37px;
:hover {
    cursor: pointer;
}
`;
