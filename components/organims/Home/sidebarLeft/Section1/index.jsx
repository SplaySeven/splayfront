import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
export default function index(props) {
	const { getUser } = props;
	return (
		<Section1>
			<Avatar getUser={getUser} />
		</Section1>
	);
}

const Section1 = styled.section`
	height: 260px;
	@media (max-width: 768px) {
		display: none;
	}
`;
