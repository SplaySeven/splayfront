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
	height: 400px;
	border-right: 15px solid #c4e0dd;
	overflow: auto;
	::-webkit-scrollbar-thumb::horizontal {
		border-radius: 10px;
	}
	background-color: #00a79d;
	@media (max-width: 768px) {
		display: none;
	}
`;
