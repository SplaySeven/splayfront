import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import firebase from '../../../../firebase/client';
import '../RegisterEmail/RegisterEmail.scss';
import { useMutation } from '@apollo/client';
import useAuth from '../../../../hooks/useAuth';
import { setToken } from '../../../../utils/token';
import { NEW_ACCOUNT, AUTHENTICATE_USER } from '../../../../gql/user';
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
export default function index() {
	const [ uidFirebase, setuidFirebase ] = useState();
	const [ emailFirebase, setEmailFirebase ] = useState();
	const [ mensajeError, setMensajeError ] = useState();
	const { setUser } = useAuth();
	const [ newUser ] = useMutation(NEW_ACCOUNT);
	const [ state, setState ] = useState();
	//Mutation para crear nuevos usuarios en apollo
	const [ authenticateUser ] = useMutation(AUTHENTICATE_USER);

	const coordenadas = useCoordenadas();
	const [ activePageName, setActivePageName ] = useState('signInPage');

	const formmikFirebase = useFormik({
		initialValues: initialValues2(),
		validationSchema: Yup.object({
			email: Yup.string().required('El Correo es Obligatorio'),
			password: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('passwordReconfirmar') ], 'Las contraseñas no son Iguales'),
			passwordReconfirmar: Yup.string()
				.required('La contraseña es Obligatorio')
				.oneOf([ Yup.ref('password') ], 'Las Contrasenas no son iguales')
		}),
		onSubmit: async (valores) => {
			const { email, password } = valores;
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((authData) => {
					const { user } = authData;
					const { uid } = user;
					setEmailFirebase(email);
					setuidFirebase(uid);
					setState(password);

					setActivePageName('verificationPage');
				})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
					toast.error(`No se Pudo Crear Usuario por :${errorMessage}`);

					setMensajeError('Noooooo');
					console.log(mensajeError);
				});
		}
	});

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object({
			name: Yup.string().required('El Nombre es Obligatorio'),
			lastname: Yup.string().required('El apellido es Obligatorio')
		}),
		onSubmit: async (valores) => {
			const { name, lastname, birthdayDay, birthdayMonth, birthdayYear, gender, type } = valores;

			const { city, country_name, latitude, longitude } = coordenadas;

			try {
				const { data } = await newUser({
					variables: {
						input: {
							name,
							lastname,
							email: emailFirebase,
							password: state,
							gender,
							birthdayDay,
							birthdayMonth,
							birthdayYear,
							country: country_name,
							city: city,
							latitude: latitude,
							longitude: longitude,
							type,
							uidFirebase: uidFirebase
						}
					}
				});
				toast.success(`Se creo correctamente el Usuario :${data.newUser.name}`);
				//Pasamamos email y paswwor para poder ingresar
				const { data: dataAuth } = await authenticateUser({
					variables: {
						input: {
							uidFirebase: uidFirebase,
							password: state
						}
					}
				});
				formik.resetForm({});
				const { token } = dataAuth.authenticateUser;
				setToken(token);
				setUser(token);
			} catch (error) {
				toast.error(error.message.replace('GraphGL error:', ''));
			}
		}
	});

	return (
		<React.Fragment>
			<div className="main__content">
				{activePageName === 'signInPage' ? (
					<div>
						<Form onSubmit={formmikFirebase.handleSubmit}>
							<Form.Field>
								<label>Digite su correo</label>
								<input
									id="email"
									required
									value={formmikFirebase.values.email}
									onChange={formmikFirebase.handleChange}
									fluid="true"
									type="text"
									placeholder="E-mail address"
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									id="password"
									required
									value={formmikFirebase.values.password}
									onChange={formmikFirebase.handleChange}
									fluid="true"
									type="password"
									placeholder="Digite su contraseña"
								/>
							</Form.Field>
							<Form.Field>
								<label>Repetir Password</label>
								<input
									id="passwordReconfirmar"
									required
									value={formmikFirebase.values.passwordReconfirmar}
									onChange={formmikFirebase.handleChange}
									fluid="true"
									type="password"
									placeholder="Digite su contraseña"
								/>
							</Form.Field>
							<Button type="submit">Siguiente</Button>
						</Form>

						<br />

						<br />
					</div>
				) : (
					<Form onSubmit={formik.handleSubmit}>
						<Form.Field>
							<label>Nombres</label>
							<input
								type="text"
								id="name"
								required
								error={formik.errors.name && true}
								value={formik.values.name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								placeholder="Nombres"
							/>
						</Form.Field>
						<Form.Field>
							<label>Apellidos</label>
							<input
								placeholder="Apellidos"
								type="text"
								required
								id="lastname"
								value={formik.values.lastname}
								onChange={formik.handleChange}
							/>
						</Form.Field>

						<Form.Field
							label="Genero"
							control="select"
							id="gender"
							value={formik.values.gender}
							onChange={formik.handleChange}
						>
							<option value="M">Masculino</option>
							<option value="F">Femenino</option>
							<option value="O">Otro</option>
						</Form.Field>
						<Form.Field>
							<label>Fecha de su cumpleaños</label>
						</Form.Field>
						<Form.Group widths="equal">
							<Form.Field
								label="Dia"
								control="select"
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
							</Form.Field>
							<Form.Field
								label="Mes"
								control="select"
								id="birthdayMonth"
								value={formik.values.birthdayMonth}
								onChange={formik.handleChange}
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
							</Form.Field>
							<Form.Field
								label="Año"
								control="select"
								id="birthdayYear"
								value={formik.values.birthdayYear}
								onChange={formik.handleChange}
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
							</Form.Field>
						</Form.Group>

						<Form.Field
							label="Tipo Cuenta"
							control="select"
							id="type"
							value={formik.values.type}
							onChange={formik.handleChange}
						>
							<option value="P">Personal</option>
							<option value="E">Empresarial</option>
						</Form.Field>

						<Form.Field>
							<Checkbox label="Estoy de acuerdo con los términos y condiciones" />
						</Form.Field>
						<Button type="submit">Enviar</Button>
					</Form>
				)}
			</div>
		</React.Fragment>
	);
}

const f = new Date();

function initialValues() {
	return {
		name: '',
		lastname: '',
		email: 'nd@splay7.com',
		password: '12345',
		birthdayDay: f.getDate(),
		birthdayMonth: f.getMonth(),
		birthdayYear: f.getFullYear() - 15,
		gender: 'M',
		type: 'P'
	};
}

function initialValues2() {
	return {
		email: '',
		password: '',
		passwordReconfirmar: ''
	};
}
