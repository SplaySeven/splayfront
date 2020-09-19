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
		<Container>
			<DivphotoProfile>
				<Photoprofile getUser={getUser} />
			</DivphotoProfile>
			<DivName>
				<Name>{getUser.name}</Name>
			</DivName>
		</Container>
	);
}

const Container = styled.div`display: flex;`;
const DivphotoProfile = styled.div`
	text-align: left;
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 54px 54px;
	padding: 6px;
`;
const Photoprofile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
border-radius: 50%;
-webkit-border-radius: 50%; /*Safari-Chrome*/
-moz-border-radius: 50%; /*Firefox*/
vertical-align: middle;
text-align: left;
border-style: none;
box-sizing: border-box;
width:40px;
height:40px;
:hover {
    cursor: pointer;
}
`;

const DivName = styled.div`
	bottom: 0;
	display: inline;
	text-align: center;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Name = styled.h1`
	color: #fff !important;
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	padding: 10px;
	box-sizing: border-box;
`;
