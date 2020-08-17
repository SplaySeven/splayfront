import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { setToken, decodeToken } from '../../../utils/token';
import { Colores } from '../../../styles/Colores';
import useAuth from '../../../hooks/useAuth';
import { AUTHENTICATE_USER } from '../../../gql/user';
import { route } from 'next/dist/next-server/server/router';

const Index = () => {
	//Router
	const router = useRouter();
	const { setUser } = useAuth();

	//State para el mensaje
	const [ mensaje, guardarMensaje ] = useState(null);
	//Mutation para crear nuevos usuarios en apollo
	const [ authenticateUser ] = useMutation(AUTHENTICATE_USER);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('El email no es valido').required('El email no puede ir vacio'),
			password: Yup.string().required('El password es obligarorio')
		}),
		onSubmit: async (valores) => {
			const { email, password } = valores;

			try {
				const { data } = await authenticateUser({
					variables: {
						input: {
							email,
							password
						}
					}
				});
				guardarMensaje('Autenticado......');
				//Guardar el token en localstorage
				const { token } = data.authenticateUser;
				//localStorage.setItem('token', token);
				setToken(token);
				setUser(token);
				route.push('wall');
			} catch (error) {
				toast.error(error.message.replace('GraphQL error:', ''));
			}
		}
	});
	const mostrarMensaje = () => {
		return (
			<div>
				<p>{mensaje}</p>
			</div>
		);
	};

	return (
		<FormStyle onSubmit={formik.handleSubmit}>
			<ItemStyled>
				<div>{mensaje && mostrarMensaje()}</div>
				<LabelStyled>Correo o telefono</LabelStyled>
				<InputSyled
					type="text"
					placeholder="Email o Telefono"
					name="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
			</ItemStyled>
			<ItemStyled>
				<LabelStyled>Password</LabelStyled>
				<InputSyled
					type="password"
					placeholder="Password"
					name="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
			</ItemStyled>
			<InicarSescionStyled type="submit">Iniciar Sesión</InicarSescionStyled>
			<BotonLargo onClick={() => Router.push('/myroute')}>¿Olvidaste Tu Cuenta?</BotonLargo>
		</FormStyle>
	);
};

export default Index;

/* estilos css */

const LabelStyled = styled.div`color: ${Colores.white_color};`;

const FormStyle = styled.form`
	float: right;
	display: flex;
	margin: 0;
	align-items: center;
	width: 50%;
`;

const ItemStyled = styled.div`
	padding: 3px;
	margin-left: 2%;
`;
const InputSyled = styled.input`
	height: 25px;
	width: 100%;
	border-top: 2px;
	text-decoration: none;
	border: 3px solid ${Colores.white_color};
	outline: none;
	color: black;
	text-align: center;
	::hover {
		background-color: ${Colores.white_color};
		color: ${Colores.white_color};
		border: 3px solid ${Colores.grey_font};
	}
`;
const InicarSescionStyled = styled.button`
	outline: none;
	margin-top: 15px;
	border: 3px solid white;
	color: ${Colores.white_color};
	background-color: ${Colores.Primario};
	padding: 4px 4px;
	border-radius: 15px;
	margin-left: 2%;
	width: 15%;
	box-sizing: content-box;
	display: inline-block;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: white;
		color: ${Colores.grey_font};
		border: 3px solid ${Colores.grey_font};
	}
`;
const BotonLargo = styled(InicarSescionStyled)`
width: 22%;
`;
