import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';

import logolinkw from '../../../../public/imagenes/Logo-inc.png';
import Search from '../../../molecules/Search';
import Avatar from '../../../atoms/Avatar';

import Burger from '../../../atoms/Burger';

import useAuth from '../../../../hooks/useAuth';

const index = () => {
	const { auth, logout } = useAuth();
	const router = useRouter();
	const client = useApolloClient();
	const onLogout = () => {
		client.clearStore();
		logout();
		router.push('/');
	};

	if (auth === null) return '0';
	return (
		<React.Fragment>
			<Nav>
				<Logo>
					<LogoSrcStyled />
				</Logo>
				<Buscar>
					<Search />
				</Buscar>
				<ContAvatar>
					<Link href="/wall/[wall]" as={`/wall/${auth.id}`}>
						<a>
							<Avatar />
						</a>
					</Link>
				</ContAvatar>

				<Hambuguesa>
					<Burger />
				</Hambuguesa>
			</Nav>
		</React.Fragment>
	);
};
export default index;

//css
const Nav = styled.nav`
	display: flex;
	position: fixed;
	z-index: 100;
	background-color: #00a79d;
	width: 100%;
	height: 69px;
`;
const Logo = styled.div`
	width: 26%;
	font-size: 20px;
	font-weight: bold;
	text-align: right;
	color: white;
	padding: 10px;
	margin: 1px;
	@media (max-width: 768px) {
		width: 15%;
		text-align: left;
		padding: 0px;
		margin: 0px;
	}
`;

const LogoSrcStyled = styled.img.attrs({ src: logolinkw })`
    width: 135px;
    @media (max-width: 768px) {
        width: 55px;
        padding-top: 20px;
        padding-left: 0px;
        margin:0;
        
	}
`;

const Buscar = styled.div`
	width: 28%;
	font-weight: bold;
	text-align: center;
	color: white;
	margin: 1px;
	@media (max-width: 768px) {
		width: 60%;
	}
`;
const ContAvatar = styled.div`
	width: 10%;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: white;
	padding-top: 6px;
	@media (max-width: 768px) {
		width: 14%;
	}
`;

const Hambuguesa = styled.div`
	@media (max-width: 768px) {
		display: block;
		text-align: right;
		width: 11%;
	}
`;
