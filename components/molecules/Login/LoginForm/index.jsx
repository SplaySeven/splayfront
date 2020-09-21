import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ErrorFirebase } from '../../../../firebase/CodeError';

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

export default function index() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const submit = async () => {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			var errorES = ErrorFirebase(errorCode);
			toast.error(errorES);
			// ...
		});
	};

	return (
		<React.Fragment>
			<Form.Input
				fluid
				icon="user"
				iconPosition="left"
				onChange={(ev) => setEmail(ev.target.value)}
				placeholder="E-mail address"
			/>
			<Form.Input
				fluid
				icon="lock"
				iconPosition="left"
				onChange={(ev) => setPassword(ev.target.value)}
				placeholder="Password"
				type="password"
			/>

			<Button onClick={submit} color="teal" fluid size="large">
				Login
			</Button>
		</React.Fragment>
	);
}
