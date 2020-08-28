import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import logofondo from '../../public/imagenes/Logo-bg.png';
import Categories from '../../components/molecules/Categories';

export default function profile() {
	const router = useRouter();

	return (
		<SectionStyled>
			<Categories id={router.query.id} />
		</SectionStyled>
	);
}

//css aqui

const SectionStyled = styled.main`
	background-image: url(${logofondo});
	background-repeat: no-repeat;
	background-size: 50%;
	background-position-y: bottom;
	background-color: #e6e7e9;
	width: 100%;
	height: 100%;
`;
