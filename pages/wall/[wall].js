import { useRouter } from 'next/router';
import Head from 'next/head';
import Wall from '../../components/organims/Wall';
export default function index() {
	const router = useRouter();
	const userId = router.query.wall;
	return (
		<React.Fragment>
			<Head>
				<title>Splay7 Wall</title>
			</Head>
			<Wall userId={userId} origen={'W'} />
		</React.Fragment>
	);
}
