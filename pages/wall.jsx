import Home from '../components/organims/Home';
import HeaderLogged from '../components/organims/Navbar/HeaderLogged';

export default function index(props) {
	const { auth } = props;

	return (
		<React.Fragment>
			<HeaderLogged />
			<Home auth={auth} />
		</React.Fragment>
	);
}

//css
