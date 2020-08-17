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

export const GET_USER = gql`
	query getUser($id: ID, $email: String) {
		getUser(id: $id, email: $email) {
			id
			email
			phone
			name
			lastname
			gender
			birthdayDay
			birthdayMonth
			birthdayYear
			country
			city
			latitude
			longitude
			avatar
			active
			confirmed
			created
			type
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
