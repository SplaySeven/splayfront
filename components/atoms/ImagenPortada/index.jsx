import React, { useState } from 'react';
import AvatarPortada from '../AvatarPortada';
import portada from '../../../public/imagenes/INTERESES/Mascotas (vd).png';
import styled from 'styled-components';
import { colmd10 } from '../../../styles/styles';
import imgcerrar from '../../../public/imagenes/closeWhite.png';
import ModalBasic from '../../organims/Modal/ModalBasic';
import PortadaForm from '../../organims/Portada/PortadaForm';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';

export default function index(props) {
	const { userId, origen } = props.userId;
	const [ showModal, setShowModal ] = useState(false);
	const [ titleModal, setTitleModal ] = useState('');
	const [ childrenModal, setChildrenModal ] = useState(null);

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: userId }
	});
	if (loading || error) return null;
	const { getUser } = data;

	const handlerModal = (type) => {
		switch (type) {
			case 'portada':
				setTitleModal('Editar foto de portada');
				setChildrenModal(<PortadaForm setShowModal={setShowModal} />);
				setShowModal(true);
				break;

			default:
				break;
		}
	};

	return (
		<React.Fragment>
			<ImgPortada getUser={getUser}>
				{origen === 'W' && (
					<div>
						<BtnPicture onClick={() => handlerModal('portada')}>Editar foto de portada</BtnPicture>
					</div>
				)}
				<AvatarPortada userId={props} />
			</ImgPortada>
			<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalBasic>
		</React.Fragment>
	);
}

/*const ImgProfile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))` */

const ImgPortada = styled.div`
	${colmd10} background: url(${(props) => (props.getUser.picture ? props.getUser.picture : portada)});
	background-position-x: 0%;
	background-position-y: 0%;
	background-repeat: repeat;
	background-repeat: no-repeat;
	padding: 6px;
	background-position: center;
`;

const BtnPicture = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 12em 0 0 auto;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;

	cursor: pointer;
	:hover {
		background: #fff;
		color: #00a79d;
	}
`;

const ImgCerrar = styled.img.attrs({ src: imgcerrar })`
width: 20px;
vertical-align: middle;
border-style: none;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
`;
