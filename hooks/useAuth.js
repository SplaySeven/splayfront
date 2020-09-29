import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

//export default () => useContext(AuthContext);
export default () => {
	return useContext(AuthContext);
};
