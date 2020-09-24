import React from 'react';

import styled from 'styled-components';

import HeaderLogged from '../Navbar/HeaderLogged';
import Portada from '../Home/portada';
import Publications from '../../molecules/publications';
import SidebarLeft from '../Home/sidebarLeft';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';
import LogoMarcaRegistrada from '../../atoms/LogoMarcaRegistrada';

export default function demo() {
	const { auth } = useAuth();
	if (auth === null) {
		console.log(auth);
	}
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: auth.id }
	});

	if (loading || error) return null;
	const { getUser } = data;

	return (
		<React.Fragment>
			<HeaderLogged />
			<Container>
				<Section>
					<Aside>
						<SidebarLeft getUser={getUser} />
					</Aside>
					<Portada getUser={getUser} />
					<Publications data={getUser} origen="H" />
					<ClearFix />
				</Section>
				<Footer>
					<LogoMarcaRegistrada />
				</Footer>
			</Container>
		</React.Fragment>
	);
}

const Section = styled.section`padding-top: 65px;`;

const Container = styled.div`
	width: 62%;
	background: #c4e0dd;
	margin: 0px auto;

	@media (max-width: 768px) {
		overflow: hidden;
		width: 100%;
	}
`;

const Aside = styled.aside`
	width: 31%;
	min-height: 1385px;
	float: left;
	background: #c4e0dd;
	text-align: center;

	@media (max-width: 768px) {
		float: none;
		min-height: auto;
		line-height: 20px;
		width: 100%;
		padding-left: 2px;
		padding-right: 2px;
		padding-top: 2px;
		padding-bottom: 2px;
	}
`;
const ClearFix = styled.div`
	float: none;
	clear: both;
`;
const Footer = styled.footer`background: #00a79d;`;
