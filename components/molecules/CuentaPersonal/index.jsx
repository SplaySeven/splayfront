import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import styled from 'styled-components';
import { useFormik } from 'formik';
import PantallaEstatica from '../../../imagenes/Pantalla_estatica.png';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import useAuth from '../../../hooks/useAuth';
import { setToken } from '../../../utils/token';
import { NEW_ACCOUNT, AUTHENTICATE_USER } from '../../../gql/user';
import ImagHelper from '../../../public/imagenes/icon-1.png';
import { Colores } from '../../../styles/Colores';
import IconoEmpresarial from '../../../public/imagenes/Iconoempresarial.png';

import { Dias, Mes, Ano } from '../../../styles/Fecha';

function useCoordenadas() {
	const [ coordenadas, setCoordenadas ] = useState({
		city: null,
		latitude: null,
		longitude: null,
		country_name: null,
		countryCode: null
	});

	useEffect(() => {
		// componentDidMount

		axios
			.get('https://ipapi.co/json/')
			.then((response) => {
				let data = response.data;
				setCoordenadas({
					city: data.city,
					country_name: data.country_name,
					latitude: data.latitude,
					longitude: data.longitude,
					countryCode: data.country_calling_code
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return coordenadas;
}

const index = () => {
	//Mutation para crear nuevos usuarios
	const { setUser } = useAuth();
	const [ newUser ] = useMutation(NEW_ACCOUNT);
	//Mutation para crear nuevos usuarios en apollo
	const [ authenticateUser ] = useMutation(AUTHENTICATE_USER);

	const coordenadas = useCoordenadas();

	//Routing

	//Validamos del formulario

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object({
			name: Yup.string().required('El Nombre es Obligatorio'),
			email: Yup.string().required('El Correo es Obligatorio'),
			password: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('passwordReconfirmar') ], 'Las contraseñas no son Iguales'),
			passwordReconfirmar: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('password') ], 'Las Contrasenas no son iguales')
		}),

		onSubmit: async (valores) => {
			console.log(valores);
			const { name, lastname, email, password, birthdayDay, birthdayMonth, birthdayYear, gender, type } = valores;

			const { city, country_name, latitude, longitude, contycode } = coordenadas;
			try {
				const { data } = await newUser({
					variables: {
						input: {
							name,
							lastname,
							email,
							password,
							gender,
							birthdayDay,
							birthdayMonth,
							birthdayYear,
							country: country_name,
							city: city,
							latitude: latitude,
							longitude: longitude,
							type
						}
					}
				});

				toast.success(`Se creo correctamente el Usuario :${data.newUser.name}`);
				//Pasamamos email y paswwor para poder ingresar
				const { data: dataAuth } = await authenticateUser({
					variables: {
						input: {
							email,
							password
						}
					}
				});
				formik.resetForm({});
				const { token } = dataAuth.authenticateUser;
				setToken(token);
				setUser(token);
				//	route.push(`/categories?id=${id}`, `/categories/${id}`);
			} catch (error) {
				toast.error(error.message.replace('GraphQL error:', ''));
			}
		}
	});

	return (
		<ContainerGeneralSyled>
			<FormRegistroStyled onSubmit={formik.handleSubmit}>
				<ContainerIzquierdoSyled>
					<TituloFormSyled>Crea tu Cuenta</TituloFormSyled>
					<SubTituloFormSyled>Es Simples y Cortos pasos..</SubTituloFormSyled>
					<Input50Syled
						type="text"
						id="name"
						required
						autoComplete="on"
						placeholder="Nombre"
						error={formik.errors.name && true}
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					<Input50Syled
						type="text"
						required
						id="lastname"
						autocomplete="off"
						autoComplete="off"
						placeholder="Apellido"
						required
						value={formik.values.lastname}
						onChange={formik.handleChange}
					/>
					<Input100Syled
						type="text"
						placeholder="Numero de celular o correo eletrónico"
						id="email"
						autocomplete="off"
						required
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.errors.email ? <div>{formik.errors.email}</div> : null}
					<Input100Syled
						type="password"
						id="password"
						autoComplete="new-password"
						placeholder="Contraseña"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.errors.password}
					/>
					{formik.errors.nombre ? <div>{formik.errors.password}</div> : null}
					<Input100Syled
						type="password"
						autoComplete="off"
						id="passwordReconfirmar"
						placeholder=" Repetir contraseña"
						value={formik.values.passwordReconfirmar}
						onChange={formik.handleChange}
						error={formik.errors.passwordRecinfirmar}
					/>
					{formik.errors.passwordReconfirmar ? <div>{formik.errors.passwordReconfirmar}</div> : null}
					<VideoStyled>
						<img src={PantallaEstatica} width="350px" height="250px" />
					</VideoStyled>
				</ContainerIzquierdoSyled>
				<ContainerDerechoSyled>
					<LabelFechaStyled>Fecha de nacimiento</LabelFechaStyled>
					<ContainerFechaSyled>
						<ItemContainerSytled>
							<LabelStyled>Dia</LabelStyled>
							<SelectDiaStyled
								id="birthdayDay"
								value={formik.values.birthdayDay}
								onChange={formik.handleChange}
							>
								<option value=" ">Dia</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
							</SelectDiaStyled>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<LabelStyled>Mes</LabelStyled>
							<SelectDiaStyled
								id="birthdayMonth"
								name="birthdayMonth"
								onChange={formik.handleChange}
								value={formik.values.birthdayMonth}
							>
								<option value="0">Mes</option>
								<option value="1">ene</option>
								<option value="2">feb</option>
								<option value="3">mar</option>
								<option value="4">abr</option>
								<option value="5">may</option>
								<option value="6">jun</option>
								<option value="7">jul</option>
								<option value="8">ago</option>
								<option value="9">sep</option>
								<option value="10">oct</option>
								<option value="11">nov</option>
								<option value="12">dic</option>
							</SelectDiaStyled>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<LabelStyled>Año</LabelStyled>
							<div>
								<SelectDiaStyled
									id="birthdayYear"
									name="birthdayYear"
									onChange={formik.handleChange}
									value={formik.values.birthdayYear}
								>
									<option value="0" label="Año" />
									<option value="2005" label="2005" />
									<option value="2004" label="2004" />
									<option value="2003" label="2003" />
									<option value="2002" label="2002" />
									<option value="2001" label="2001" />
									<option value="2000" label="2000" />
									<option value="1999" label="1999" />
									<option value="1998" label="1998" />
									<option value="1997" label="1997" />
									<option value="1996" label="1996" />
									<option value="1995" label="1995" />
									<option value="1994" label="1994" />
									<option value="1993" label="1993" />
									<option value="1992" label="1992" />
									<option value="1991" label="1991" />
									<option value="1990" label="1990" />
									<option value="1989" label="1989" />
									<option value="1988" label="1988" />
									<option value="1987" label="1987" />
									<option value="1986" label="1986" />
									<option value="1985" label="1985" />
									<option value="1984" label="1984" />
									<option value="1982" label="1982" />
									<option value="1981" label="1981" />
									<option value="1980" label="1980" />
									<option value="1979" label="1979" />
									<option value="1978" label="1978" />
									<option value="1977" label="1977" />
									<option value="1976" label="1976" />
									<option value="1975" label="1975" />
									<option value="1974" label="1974" />
									<option value="1973" label="1973" />
									<option value="1972" label="1972" />
									<option value="1970" label="1970" />
									<option value="1971" label="1971" />
									<option value="1970" label="1970" />
									<option value="1969" label="1969" />
									<option value="1968" label="1968" />
									<option value="1967" label="1967" />
									<option value="1966" label="1966" />
									<option value="1965" label="1965" />
								</SelectDiaStyled>
							</div>
						</ItemContainerSytled>
						<ItemContainerSytled>
							<ImgHelpStyle />
						</ItemContainerSytled>
					</ContainerFechaSyled>
					<SexoStyled>
						Sexo : Mujer
						<input
							type="radio"
							name="gender"
							value="M"
							defaultChecked={formik.values.gender === 'M'}
							onChange={formik.handleChange}
						/>
						Hombre
						<input
							type="radio"
							name="gender"
							value="H"
							defaultChecked={formik.values.gender === 'H'}
							onChange={formik.handleChange}
						/>
						Personalizado
						<input
							type="radio"
							name="gender"
							value="P"
							defaultChecked={formik.values.gender === 'P'}
							onChange={formik.handleChange}
						/>
						<ImgHelpStyle />
					</SexoStyled>

					<div>
						<ParrafoStyled>
							Al hacer click en "registrate", aceptas nuestros condiciones y politicas de datos, es
							posible que te enviemos notificaciones por SMS o al correo eletrónico.
						</ParrafoStyled>
					</div>

					<BotonSyled
						type="submit"
						text="randomText"
						onClick={(e) => {
							formik.values.type = 'P';
						}}
					>
						Registrate
					</BotonSyled>

					<NumeralItemsStyled>
						<LogoSrcStyled />
						<TituloFormSyled>Crea tu Cuenta Empresarial</TituloFormSyled>
					</NumeralItemsStyled>
					<ParrafoStyled>
						Crea una pagina para tu empresa,negocio,personaje politico o grupo de música
					</ParrafoStyled>
					<BotonEmpresaStyle
						type="submit"
						onClick={(e) => {
							formik.values.type = 'E';
						}}
					>
						Registro empresarial
					</BotonEmpresaStyle>
				</ContainerDerechoSyled>
			</FormRegistroStyled>
		</ContainerGeneralSyled>
	);
};

export default index;
const f = new Date();

function initialValues() {
	return {
		name: '',
		lastname: '',
		email: '',
		password: '',
		passwordReconfirmar: '',
		birthdayDay: f.getDate(),
		birthdayMonth: f.getMonth(),
		birthdayYear: f.getFullYear() - 15,
		gender: 'M'
	};
}
const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 360px) {
		max-width: 720px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 1200px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`
const Container1 = styled(Container)`
	display: flex;
	flex-direction: column;
	@media (min-width: 360px) {
		flex-direction: column;
	}
	@media (min-width: 768px) {
		flex-direction: column;
	}
	@media (min-width: 992px) {
		flex-direction: row;
	}
`
const ContainerGeneralSyled = styled.div`
	width: 100%;
	margin: 0px;
	padding: 0px;
	height: 100vh;
`;

const FormRegistroStyled = styled.form`
	box-sizing: border-box;
	display: flex;
	display: -ms-flexbox;
	-ms-flex-flow: row wrap;
	flex-flow: row wrap;

	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	justify-content: space-between;

	@media (min-width: 360px) {
		max-width: 720px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 1200px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;
const ContainerIzquierdoSyled = styled.div`
	/*width: 100%;*/
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	display: block;
	-ms-flex: 0 0 41.66666667%;
	flex: 0 0 41.66666667%;
	max-width: 41.66666667%;

	@media (max-width: 576px) {
		display: block;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}


	@media (min-width: 768px) {

	}
`;

const TituloFormSyled = styled.h1`
	padding-top: 3%;
	text-align: left;
	font-size: 50px;
	color: #5a5b5d;
	margin: 0;
`;
const SubTituloFormSyled = styled.p`
	color: #5a5b5d;
	font-size: 18px;
	margin-top: 0px;
	margin-bottom: 15px;
	text-align: left;

	width: 100%;
`;
const Input50Syled = styled.input`
	width: 49%;
	outline: none;
	font-size: 14px;
	padding: 10px 16px;
	margin-top: 0px;
	margin-bottom: 12px;
	flex-wrap: wrap;
	border-radius: 8px;
	border: 2px solid ${Colores.grey_font};
	justify-content: space-between;
	font-family: ${Colores.tipo_letra};
`;
const Input100Syled = styled.input`
	width: 100%;
	outline: none;
	font-size: 14px;
	padding: 10px 16px;
	margin-bottom: 12px;
	border-radius: 8px;

	border: 2px solid ${Colores.grey_font};
`;
const VideoStyled = styled.div`
	width: 100%;
	padding-top: 5%;
	padding-bottom: 20%;
	align-items: center;
	position: relative;
	
`;

//Lado derecho

const ContainerDerechoSyled = styled.div`
	/*
	padding: 12px;
	margin-left: 30px;
	margin-right: 8px;*/

	display: block;
	-ms-flex: 0 0 45.83333333%;
	flex: 0 0 45.83333333%;
	max-width: 45.83333333%;
	@media (max-width: 576px) {
		display: block;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
`;
const LabelFechaStyled = styled.p`
	margin-top: 38px;
	margin-left: 0px;
	text-align: left;
	padding: 1px;
	font-size: 15px;
	color: #808080;
`;

//Dia const

const ContainerFechaSyled = styled.div``;
const ItemContainerSytled = styled.div`
	width: 20%;
	display: inline-block;
	margin: 8px;
`;

const SelectDiaStyled = styled.select`
	width: 100%;
	height: 35px;
	font-size: 14px;
	cursor: pointer;
	border-radius: 8px;
	border: 2px solid ${Colores.grey_font};
	font-family: ${Colores.tipo_letra};
	padding-left: 15px;

	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
	:hover,
	focus {
		color: white;
		border: none;
		outline: none !important;
		outline-offset: 0 !important;
		outline-width: 0;
		background-color: #00a79d;
		border-radius: 8px;
		border: 2px solid ${Colores.grey_font};
	}
`;

const LabelStyled = styled.label`
	font-size: 15px;
	color: ${Colores.grey_font};
`;
const ImgHelpStyle = styled.img.attrs({ src: ImagHelper })`
width: 30px;
height: 30px;
border: 1px solid blue;`;

const SexoStyled = styled.fieldset`
	text-align: left;
	margin-left: 0px;
	border-style: none;
	padding: 10px;
	float: left;
	font-size: 15px;
	width: 100%;
	color: ${Colores.grey_font};
	padding-top: 25px;
	& input {
		margin: 12px;
	}
`;
const ParrafoStyled = styled.p`
	color: ${Colores.grey_font};
	margin-left: 10px;
	font-size: 15px;
	text-align: justify;
	margin-top: 12px;
`;
const BotonSyled = styled.button`
	border: 3px solid white;
	margin-top: 33px;
	padding: 10px;
	width: 250px;
	border-radius: 25px;
	font-size: 28px;
	color: white;
	border: 3px solid white;
	background-color: #00a79d;
	white-space: normal;
	outline: none;

	:hover {
		background: white;
		color: ${Colores.grey_font};
		cursor: pointer;
		border: 3px solid ${Colores.grey_font};
	}
`;

const BotonEmpresaStyle = styled(BotonSyled)`
width: 350px;
margin-top: 10px;
`;

const NumeralItemsStyled = styled.div`
	margin-left: 2%;

	display: flex;
	font-size: 25px;
	& label {
		padding: 15px 0px;
		text-align: left;
		color: #595b5d;
	}
`;

const LogoStyled = styled.div`
	width: 75px;
	padding: 8px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs({ src: IconoEmpresarial })`
	height: 50px;
	margin-top:50px;
  
`;
