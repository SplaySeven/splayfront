import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ISUSER_FIREBASE, NEW_ACCOUNT, AUTHENTICATE_USER, USER_CONNECTD, GETUSER_CONNECT } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';
import { setToken } from '../../../utils/token';
import NewAccount from '../Accounts/NewAccounts';
export default function demo3(props) {
	const { setUser } = useAuth();
	const [ authenticateUser ] = useMutation(AUTHENTICATE_USER);
	const [ userconnectd ] = useMutation(USER_CONNECTD);
	const { data, loading, error } = useQuery(ISUSER_FIREBASE, {
		variables: { uidFirebase: props.data.uid }
	});

	if (loading || error) return null;
	const { isUserFirebase } = data;

	//si ya se registro en bae de datos lo mandamos pagina de portal
	if (isUserFirebase) {
		(async () => {
			try {
				const { data } = await authenticateUser({
					variables: {
						input: {
							uidFirebase: props.data.uid,
							password: '123456'
						}
					}
				});

				//Guardar el token en localstorage
				const { token } = data.authenticateUser;
				//localStorage.setItem('token', token);
				setToken(data.authenticateUser.token);
				setUser(data.authenticateUser.token);

				await userconnectd({
					variables: {
						connected: 'S'
					}
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}

	//si no esta registrado creamos formulario y tomamos los datos

	return (
		<React.Fragment>
			{!isUserFirebase && <NewAccount data={props.data} />}
			{isUserFirebase && <div />}
		</React.Fragment>
	);
}
