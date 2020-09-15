import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
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
	firebase.initializeApp(firebaseConfig);
}

export const loginWithGmail = () => {
	const gmailhubProvider = new firebase.auth.GoogleAuthProvider();
	return firebase.auth().signInWithPopup(gmailhubProvider);
};

export const loginWithFacebook = () => {
	const facebookhubProvider = new firebase.auth.FacebookAuthProvider();
	return firebase.auth().signInWithPopup(facebookhubProvider);
};

export default firebase;
