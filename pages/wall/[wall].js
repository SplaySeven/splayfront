import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Layout from '../../components/Layout';
import Navbar from '../../components/organims/Navbar';
import { GET_USER } from '../../gql/user';
import ImageNoFound from '../../public/imagenes/AvatarMasculino.png';
import { Colores } from '../../styles/Colores';

export default function index() {
	const router = useRouter();
	const ID = router.query.wall;

	const { data, loading, error } = useQuery(GET_USER, {
		variables: {
			id: ID
		}
	});
	if (loading) return null;
	if (error) return <h1>Usuario no contrado</h1>;
	const { getUser } = data;
	console.log(getUser);
	return (
		<Layout>
			<Navbar />
			<ContainerStyled>
				<h1>
					Aqui esta el perfil de {getUser.name}-ID:{ID}
				</h1>
				<AvatarStyled src={getUser.avatar ? getUser.avatar : ImageNoFound} />
				<div>Folloers</div>
				<div>
					<p>{getUser.name}</p>
				</div>
			</ContainerStyled>
		</Layout>
	);
}

const ContainerStyled = styled.div`
	margin-top: 70px;
	background: violet;
`;
const AvatarStyled = styled.img`
	width: 170px;
	height: 170px;
	border-radius: 50%;
	border: 12px solid ${Colores.Primario};
`;
const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
