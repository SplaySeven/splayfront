import { useRouter } from 'next/router';
import Head from 'next/head';
import Portada from '../../components/organims/Portada';
import HeaderLogged from '../../components/organims/Navbar/HeaderLogged';
import ContainerPerfil from '../../components/organims/ContainerPerfil';
export default function index() {
	const router = useRouter();
	const userId = router.query.wall;

	return (
		<React.Fragment>
			<Head>
				<title>Splay7</title>
			</Head>
			<HeaderLogged />
			<Portada userId={userId} origen={'W'} />
			<ContainerPerfil userId={userId} origen={'W'} />
		</React.Fragment>
	);
}
