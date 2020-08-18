import React from 'react';

import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import AvatarF from '../../../public/imagenes/AvatarFemenino.png';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';
import useAuth from '../../../hooks/useAuth';
import { Colores } from '../../../styles/Colores.js';
export default function Logo1() {
	const { auth } = useAuth();
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: auth.id }
	});
	if (loading || error) return null;
	const { getUser } = data;
	return (
		<LogoStyled>
			<LogoSrcStyled getUser={getUser} />
		</LogoStyled>
	);
}

//css
const LogoStyled = styled.div`
	width: 75px;
	padding: 8px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`

	height: 60px;
	width:60px;
	border-radius: 50%;
	border: 4px solid ${Colores.white_color};
	
  
`;

//styled.img.attrs((props) => ({ src: props.src || IconoUno }))`
