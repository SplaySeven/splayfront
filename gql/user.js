import { gql } from '@apollo/client';

export const NEW_ACCOUNT = gql`
	mutation newUser($input: UserInput) {
		newUser(input: $input) {
			id
			email
			name
			lastname
			birthdayDay
			birthdayMonth
			birthdayYear
			country
			city
			latitude
			longitude
			gender
			type
		}
	}
`;

export const AUTHENTICATE_USER = gql`
	mutation authenticateUser($input: authenticateInput) {
		authenticateUser(input: $input) {
			token
		}
	}
`;

export const USUARIO_ACTUAL = gql`
	query obtenerUsuario {
		obtenerUsuario {
			user
		}
	}
`;

export const UPDATE_AVATAR = gql`
	mutation updateAvatar($file: Upload) {
		updateAvatar(file: $file) {
			status
			urlAvatar
		}
	}
`;
export const SEARCH = gql`
	query search($search: String) {
		search(search: $search) {
			name
			lastname
			email
			avatar
		}
	}
`;
