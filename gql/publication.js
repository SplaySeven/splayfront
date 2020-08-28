import { gql } from '@apollo/client';

export const PUBLISH = gql`
	mutation publish($file: Upload) {
		publish(file: $file) {
			status
			urlFile
		}
	}
`;

export const GET_PUBLICATIONS = gql`
	query getPublicactions($id: ID!) {
		getPublications(id: $id) {
			id
			idUser
			file
			typeFile
			createAt
		}
	}
`;
