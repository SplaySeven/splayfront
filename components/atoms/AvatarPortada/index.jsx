import React from 'react';

import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';
import useAuth from '../../../hooks/useAuth';
export default function Logo1(props) {
	const { userId } = props.userId;
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: userId.userId }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<DivphotoProfile2>
			<ImgProfile getUser={getUser} />
		</DivphotoProfile2>
	);
}

const DivphotoProfile2 = styled.div`
	height: 150px;
	width: 150px;
	background: url(/icons/wall-profile/border-photo-1.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 150px 150px;
	padding: 6px;
	position: absolute;
	top: 20px;
	box-sizing: border-box;
`;
const ImgProfile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
box-sizing: border-box;
vertical-align: middle;
border-style: none;
border-radius: 50%;
width:100%;
height:100%;
`;
