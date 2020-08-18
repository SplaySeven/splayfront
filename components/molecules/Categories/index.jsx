import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import IconoNumeros from '../../atoms/IconoNumeros';
import IconoDos from '../../../public/imagenes/Icono2.png';
import IconoTres from '../../../public/imagenes/Icono3.png';
import IconoCuatro from '../../../public/imagenes/Icono4.png';
import { UPDATE_AVATAR, GET_USER } from '../../../gql/user';
import ProfilePhoto from '../../atoms/ProfilePhoto';
import { Colores } from '../../../styles/Colores';
import { toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import useAuth from '../../../hooks/useAuth';

export default function index() {
	const { auth } = useAuth();
	function Categorias(e) {
		e.preventDefault();
	}

	const [ updateAvatar ] = useMutation(UPDATE_AVATAR, {
		update(cache, { data: { updateAvatar } }) {
			const { getUser } = cache.readQuery({
				query: GET_USER,
				variables: { id: auth.id }
			});

			cache.writeQuery({
				query: GET_USER,
				variables: { id: auth.id },
				data: {
					getUser: { ...getUser, avatar: updateAvatar.urlAvatar }
				}
			});
		}
	});
	const onDrop = useCallback(async (acceptedFile) => {
		const file = acceptedFile[0];
		try {
			const result = await updateAvatar({ variables: { file } });

			const { data } = result;

			if (!data.updateAvatar.status) {
				toast.warning('Error al actualizar la Foto');
			} else {
				toast.success('Se cargo con Exito Fotografia');
			}
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}, []);
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/jpeg,image/png',
		noKeyboard: true,
		multiple: false,
		onDrop
	});

	return (
		<ContainerCategorySyled>
			<FormRegistroCategoryStyled onSubmit={Categorias}>
				<TituloCategorisStyled>
					<h1>Bienvenido {auth.name}</h1>
				</TituloCategorisStyled>
				<SubTituloCategorisStyled>
					<h2>
						Te damos la bienvenida a Splay7,donde podrás compartir con todos tus amigos y seguidores,
						fotografias,videos comentarios ademas de crear tus propias redes con temas de todo tu interés .
					</h2>
					<h2>!Termina los pasos y disfrutalo !</h2>
				</SubTituloCategorisStyled>
				<NumeralItemsStyled>
					<IconoNumeros src={IconoDos} />
					<label>Sube tu Foto de perfil</label>
				</NumeralItemsStyled>
				<ContainerFotoStyled>
					<ProfilePhoto />
					<ContainerButtonFotosStyled>
						<AgregarFotoStyled {...getRootProps()} type="submit">
							Agregar Foto
						</AgregarFotoStyled>
						<input {...getInputProps()} />
						<hr />
						<AgregarFotoStyled type="submit">Tomar Foto</AgregarFotoStyled>
					</ContainerButtonFotosStyled>
				</ContainerFotoStyled>
			</FormRegistroCategoryStyled>
		</ContainerCategorySyled>
	);
}

//css

const ContainerCategorySyled = styled.div`
	width: 100%;
	margin: 0px;
	padding: 0px;
	height: 100vh;
`;

const FormRegistroCategoryStyled = styled.form`
	max-width: 68%;
	background: #b7d9d7;
	margin: auto;
	margin-top: 75px;
	box-sizing: border-box;
`;

const TituloCategorisStyled = styled.div`
	color: #595b5d;
	font-size: 25px;
	font-weight: bold;
	margin-left: 20%;
	padding-top: 10px;
	& h1 {
		padding: 0px;
		margin: 0px;
	}
`;

const SubTituloCategorisStyled = styled.div`
	color: #595b5d;
	font-size: 13px;
	margin-left: 20%;
	margin-right: 20%;
	text-align: justify;
	& h2 {
		padding: 5px;
		margin: 0px;
	}
`;

const NumeralItemsStyled = styled.div`
	margin-left: 18%;
	display: flex;
	font-size: 25px;
	& label {
		padding: 15px 0px;
		text-align: left;
		color: #595b5d;
	}
`;

const ContainerFotoStyled = styled.div`
	padding-top: 0px;
	margin-top: 0px;
	margin-left: 21%;
	display: flex;
`;

const ContainerButtonFotosStyled = styled.div`
	width: 50%;
	padding-top: 25px;
	text-align: center;
	&hr {
		color: black;
		height: 10px;
	}
`;
const AgregarFotoStyled = styled.button`
	outline: none;
	margin-left: 35%;
	border: 3px solid ${Colores.grey_font};
	color: ${Colores.grey_font};
	background-color: #b7d9d7;
	padding: 4px;
	font-size: 20px;
	height: 35px;
	border-radius: 25px;
	margin: 15px 6px;
	width: 170px;
	box-sizing: content-box;
	display: inline-block;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: ${Colores.Primario};
		color: ${Colores.white_color};
		border: 3px solid ${Colores.grey_font};
	}
`;
