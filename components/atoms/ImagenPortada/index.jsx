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
	const { userId, origen } = props.data;

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
				<AvatarPortada userId={props.data} />
				{origen === 'W' && (
					<section>
						<BtnPicture onClick={() => handlerModal('portada')}>Editar foto de portada</BtnPicture>
					</section>
				)}
			</ImgPortada>
			<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalBasic>
		</React.Fragment>
	);
}

/*const ImgProfile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))` */

const ImgPortada = styled.div`
	background: url(${(props) => (props.getUser.picture ? props.getUser.picture : portada)});
	background-position-x: 0%;
	background-position-y: 0%;
	background-repeat: repeat;
	background-repeat: no-repeat;
	background-size: cover;
	height: 200px;
	background-position: center;
	@media (max-width: 768px) {
		height: 100px;
	}
`;

const BtnPicture = styled.a`
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	height: 15px;
	font-size: 10px;
	padding: 3px;
	border-radius: 20px;
	left: 75%;
	position: relative;
	cursor: pointer;
	:hover {
		background: #fff;
		color: #00a79d;
	}

	@media (max-width: 768px) {
		height: 10px;
		font-size: 5px;
		:hover {
			background: #fff;
			color: #00a79d;
		}
		border: 1px solid white;
	}
`;
