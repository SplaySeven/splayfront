import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_USER } from '../../../gql/user';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';
import Modalbasic from '../../organims/Modal/ModalBasic';
import AvatarForm from '../../organims/AvatarForm';
export default function Logo1(props) {
	const { origen } = props.userId;

	const [ showModal, setShowModal ] = useState(false);
	const { userId } = props.userId;
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: userId }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<DivphotoProfile2>
			{origen === 'W' ? (
				<ImgProfile getUser={getUser} onClick={() => setShowModal(true)} />
			) : (
				<ImgProfile getUser={getUser} />
			)}
			<Modalbasic show={showModal} setShow={setShowModal} title="Subir Foto de Avatar">
				<AvatarForm setShowModal={setShowModal} />
			</Modalbasic>
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
	top: 90px;
	@media (max-width: 768px) {
		height: 55px;
		width: 55px;
		background-size: 51px 51px;
		padding: 0px;
		top: 90px;
	}
`;
/* Se pone con props para que sean dinamicos los avatar */
const ImgProfile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
box-sizing: border-box;
border-style: none;
border-radius: 50%;
line-height:100px;
width:100%;
height:100%;
top: 80px;
:hover{
	cursor: pointer;
}
@media (max-width: 768px) {
	:hover{
	cursor: pointer;
}

	}


`;
