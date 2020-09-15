import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../CuentaPersonal/CuentasPersonal.scss';
import { loginWithGmail, loginWithFacebook } from '../../../firebase/client';
import ModalBasic from '../../organims/Modal/ModalBasic';
import ModalVerificacionNumberPhone from '../../organims/Modal/ModalVerificacionNumberPhone';
import RegisterEmail from '../CuentaPersonal/RegisterEmail';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { setToken } from '../../../utils/token';
import useAuth from '../../../hooks/useAuth';
import { AUTHENTICATE_USER, NEW_ACCOUNT } from '../../../gql/user';
import firebase from '../../../firebase/client';

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
	const [ showModal, setShowModal ] = useState(false);
	const [ titleModal, setTitleModal ] = useState('');
	const [ childrenModal, setChildrenModal ] = useState(null);
	const [ authenticateUser ] = useMutation(AUTHENTICATE_USER);
	const [ state, setstate ] = useState('session');
	const { setUser } = useAuth();
	const coordenadas = useCoordenadas();
	const [ newUser ] = useMutation(NEW_ACCOUNT);

	const handleClick = () => {
		setstate('gmail');
		loginWithGmail()
			.then((user) => {
				const { additionalUserInfo } = user;

				const { isNewUser } = additionalUserInfo;
				const { profile } = additionalUserInfo;
				const { family_name } = profile;
				const { given_name } = profile;
				const { email } = profile;

				const uidFirebase = user.user.uid;
				//guardamos en nuestra base de datos si es nuevo
				if (additionalUserInfo.isNewUser === true) {
					(async () => {
						const { city, country_name, latitude, longitude } = coordenadas;
						try {
							const { data } = await newUser({
								variables: {
									input: {
										name: given_name,
										lastname: family_name,
										email: email,
										password: '12345',
										gender: '',
										birthdayDay: '01',
										birthdayMonth: '01',
										birthdayYear: '1980',
										country: country_name,
										city: city,
										latitude: latitude,
										longitude: longitude,
										type: 'P',
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
										password: '12345'
									}
								}
							});
							const { token } = dataAuth.authenticateUser;
							setToken(token);
							setUser(token);
							//	route.push(`/categories?id=${id}`, `/categories/${id}`);
						} catch (error) {
							toast.error(error.message.replace('GraphQL error:', ''));
						}
					})();
				} else {
					// consultamos a mongo db el usuario
					(async () => {
						try {
							const { data } = await authenticateUser({
								variables: {
									input: {
										uidFirebase: uidFirebase,
										password: '12345'
									}
								}
							});

							//Guardar el token en localstorage
							const { token } = data.authenticateUser;
							//localStorage.setItem('token', token);
							setToken(data.authenticateUser.token);
							setUser(data.authenticateUser.token);
						} catch (error) {
							toast.error(error.message.replace('GraphQL error:', ''));
						}
					})();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const faceClick = () => {
		loginWithFacebook
			.then((user) => {
				const { additionalUserInfo } = user;

				console.log(additionalUserInfo.isNewUser);
				console.log(user.user.uid);
				console.log(additionalUserInfo.profile.family_name);
				console.log(additionalUserInfo.profile.given_name);
				console.log(additionalUserInfo.profile.email);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handlerModal = (type) => {
		setstate('session');
		switch (type) {
			case 'telefono':
				setTitleModal('Registrar Por Telefono');
				setChildrenModal(<ModalVerificacionNumberPhone />);
				setShowModal(true);
				setstate('telefono');
				break;
			case 'email':
				setTitleModal('Registrar Por Correo');
				setChildrenModal(<RegisterEmail />);
				setShowModal(true);
				setstate('email');
				break;
			default:
				break;
		}
	};

	const FirebaseClick = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		if (state === 'session') {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((authData) => {
					const { user } = authData;
					const { uid } = user;
					(async () => {
						try {
							const { data } = await authenticateUser({
								variables: {
									input: {
										uidFirebase: uid,
										password: password
									}
								}
							});

							//Guardar el token en localstorage
							const { token } = data.authenticateUser;
							//localStorage.setItem('token', token);
							setToken(data.authenticateUser.token);
							setUser(data.authenticateUser.token);
						} catch (error) {
							toast.error(error.message.replace('GraphQL error:', ''));
						}
					})();
				})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
					toast.error(`No se Pudo Ingresar por :${errorMessage}`);
				});
		}
		setstate('session');
	};
	return (
		<React.Fragment>
			<Grid textAlign="center" style={{ height: '77vh' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="teal" textAlign="center">
						<a>Ingrese a su cuenta</a>
					</Header>
					<Form size="large" onSubmit={FirebaseClick}>
						<Segment stacked>
							<Button color="blue" fluid size="large" onClick={() => handlerModal('telefono')}>
								Continuar con numero telefono
							</Button>
							<br />
							<Button color="facebook" onClick={faceClick} fluid size="large">
								<Icon name="facebook" /> Continuar con Facebook
							</Button>
							<br />
							<Button color="google plus" onClick={handleClick} fluid size="large">
								<Icon name="google plus" /> Continuar con Google
							</Button>
							<br />
							<Button color="grey" fluid size="large">
								Continuar con Apple
							</Button>
							<br />
							<Form.Input
								fluid
								id="email"
								name="email"
								icon="user"
								iconPosition="left"
								placeholder="E-mail address"
								autoComplete="on"
							/>
							<Form.Input
								fluid
								icon="lock"
								id="password"
								iconPosition="left"
								placeholder="Password"
								type="password"
								autoComplete="on"
							/>

							<Button type="submit" color="teal" fluid size="large">
								Iniciar Sessión
							</Button>
						</Segment>
					</Form>
					<Message>
						¿No tienes Cuenta? <a onClick={() => handlerModal('email')}>Registrate</a>
					</Message>
				</Grid.Column>
			</Grid>
			<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalBasic>
		</React.Fragment>
	);
}
