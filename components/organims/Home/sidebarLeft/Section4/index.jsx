import React from 'react';
import styled from 'styled-components';
import NotFriends from '../NotFriends';
export default function index(props) {
	const { getUser } = props;
	return (
		<Section4>
			<NotFriends getUser={getUser} />
		</Section4>
	);
}

const Section4 = styled.section`
	height: 220px;
	border-right: 15px solid #c4e0dd;
	background-color: #00a79d;
	@media (max-width: 768px) {
		display: none;
	}
`;
