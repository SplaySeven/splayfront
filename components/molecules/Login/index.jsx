import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import { ISUSER_FIREBASE, GET_USER } from '../../../gql/user';
import { useMutation, useQuery } from '@apollo/client';
import Accounts from '../../atoms/Accounts';
const config = {
	apiKey: 'AIzaSyB6Z3nS7j1TuWcJQQEQ9TWUsSXTYLTg2-0',
	authDomain: 'splay7-8f0b9.firebaseapp.com',
	databaseURL: 'https://splay7-8f0b9.firebaseio.com',
	projectId: 'splay7-8f0b9',
	storageBucket: 'splay7-8f0b9.appspot.com',
	messagingSenderId: '665609040430',
	appId: '1:665609040430:web:ea5fd0fb32da95d3b1e5bf',
	measurementId: 'G-CWW5V9EXGN'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default function demo2() {
	const [ uid, setUid ] = useState('isActive');

	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// We will display Google and Facebook as auth providers.
		signInOptions: [
			{
				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
			},
			{
				provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
			},
			{
				provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID
			},
			{
				provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
				requireDisplayName: false
			}
		],

		callbacks: {
			// Avoid redirects after sign-in.
			signInSuccessWithAuthResult: () => false
		}
	};
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				setUid(user);
			}
			firebase.auth().signOut();
		});
	}, []);

	return (
		<React.Fragment>
			{uid === 'isActive' ? (
				<Form>
					<TituloFormSyled>Crea tu Cuenta</TituloFormSyled>
					<SubTituloFormSyled>En simples y cortos pasos..</SubTituloFormSyled>

					<Grid textAlign="center" style={{ height: '62vh' }} verticalAlign="middle">
						<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
					</Grid>
				</Form>
			) : (
				<Accounts data={uid} />
			)}
		</React.Fragment>
	);
}

const TituloFormSyled = styled.h1`
	padding-top: 3%;
	text-align: center;
	font-size: 50px;
	color: #5a5b5d;
	margin: 0;
`;

const SubTituloFormSyled = styled.p`
	color: #5a5b5d;
	font-size: 18px;
	margin-top: 0px;
	margin-bottom: 15px;
	text-align: center;

	width: 100%;
`;
