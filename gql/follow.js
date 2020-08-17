import { gql } from '@apollo/client';

export const IS_FOLLOW = gql`
	query isFollow($email: String) {
		isFollow(email: $email)
	}
`;
export const FOLLOW = gql`
	mutation follow($email: String!) {
		follow(email: $email)
	}
`;

export const UN_FOLLOW = gql`
	mutation unFollow($email: String!) {
		unFollow(email: $email)
	}
`;
export const GET_FOLLOWERS = gql`
	query getFollowers($email: String!) {
		getFollowers(email: $email) {
			email
			name
			avatar
		}
	}
`;
