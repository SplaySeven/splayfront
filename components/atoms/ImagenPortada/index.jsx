import React, { useState } from 'react';
import AvatarPortada from '../AvatarPortada';
import styled from 'styled-components';
import { colmd10 } from '../../../pages/styles';
import imgcerrar from '../../../public/imagenes/closeWhite.png';
import ModalBasic from '../../organims/Modal/ModalBasic';
import PortadaForm from '../../organims/Portada/PortadaForm';
export default function index(props) {
	const [ showModal, setShowModal ] = useState(false);
	const [ titleModal, setTitleModal ] = useState('');
	const [ childrenModal, setChildrenModal ] = useState(null);

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
			<ImgPortada>
				<div>
					<BtnPicture onClick={() => handlerModal('portada')}>Editar foto de portada</BtnPicture>
				</div>

				<AvatarPortada userId={props} />
			</ImgPortada>
			<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalBasic>
		</React.Fragment>
	);
}

const ImgPortada = styled.div`
	${colmd10} background: url(/imagenes/bg-manuel.jpg);
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
