import React from 'react';
import styled from 'styled-components';

import HeaderLogged from '../Navbar/HeaderLogged';
import LogoMarcaRegistrada from '../../atoms/LogoMarcaRegistrada';
import AsideSection1 from '../Wall/SidebarLeft/Section1';
import AsideSection2 from '../Wall/SidebarLeft/Section2';
import AsideSection3 from '../Wall/SidebarLeft/Section3';
import AsideSection4 from '../Wall/SidebarLeft/Section4';
import AsideSection5 from '../Wall/SidebarLeft/Section5';
import AsideSection6 from '../Wall/SidebarLeft/Section6';
import Portada from '../Wall/Portada';
import Portada2 from '../Wall/Portada2';
import Publications from '../../molecules/publications';
export default function index(props) {
	const { userId } = props;

	return (
		<React.Fragment>
			<HeaderLogged />
			<Container>
				<Section>
					<Portada data={props} />
					<Aside>
						<AsideSection1 />
						<AsideSection2 />
						<AsideSection3 />
						<AsideSection4 userId={userId} />
						<AsideSection5 />
						<AsideSection6 />
					</Aside>
					<section>
						<Portada2 data={props} />
					</section>

					<section>
						<Publications data={props} origen={'W'} />
					</section>

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
	border-right: 15px solid #c4e0dd;

	@media (max-width: 768px) {
		float: none;
		min-height: auto;
		line-height: 20px;
		width: 100%;
		padding-left: 2px;
		padding-right: 2px;
		padding-top: 2px;
		padding-bottom: 2px;
		border-right: 0px;
	}
`;
const ClearFix = styled.div`
	float: none;
	clear: both;
`;
const Footer = styled.footer`background: #00a79d;`;
