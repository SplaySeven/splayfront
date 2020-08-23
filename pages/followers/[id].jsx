import React from 'react';
import { useRouter } from 'next/router';
import HeaderLogged from '../../components/organims/Navbar/HeaderLogged';
import Portada from '../../components/organims/Portada';
import ContainerPerfil from '../../components/organims/ContainerPerfil';
export default function index() {
	const router = useRouter();
	const userId = router.query.id;

	// Se pone F para saver que son Seguidores
	return (
		<React.Fragment>
			<HeaderLogged />
			<Portada userId={userId} origen={'F'} />
			<ContainerPerfil userId={userId} origen={'F'} />
		</React.Fragment>
	);
}
