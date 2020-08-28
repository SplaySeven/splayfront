import ProfilePhoto from '../../../public/imagenes/PicturePerfil.png';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';

import styled from 'styled-components';

export default function Logo1() {
	const { auth } = useAuth();

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: auth.id }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<LogoStyled>
			<LogoSrcStyled getUser={getUser} />
		</LogoStyled>
	);
}

//css
const LogoStyled = styled.div`
	width: 300px;
	padding: 0px 0px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs((props) => ({
	src: props.getUser.avatar ? props.getUser.avatar : ProfilePhoto
}))`
	height: 250px;
	padding: 0px 0px;

  
`;
