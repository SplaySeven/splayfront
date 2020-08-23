import Layout from '../components/Layout';

import useAuth from '../hooks/useAuth';
// Compomentes

import Auth from '../pages/Auth';
import Wall from '../pages/wall2';

export default function index2() {
	const { auth } = useAuth();

	return (
		<Layout>
			{auth === null && <Auth />}
			{auth && <Wall />}
		</Layout>
	);
}
