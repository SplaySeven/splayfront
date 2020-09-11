import React from 'react';
import styled from 'styled-components';
import imgFriends from '../../../public/imagenes/friends-on.png';

export default function index(props) {
	const { src } = props;
	return (
		<DivBtn0>
			<ImgFriends img={src} />
		</DivBtn0>
	);
}

const DivBtn0 = styled.div`
	
`;

const ImgFriends = styled.img.attrs((props) => ({ src: props.img ? props.img : imgFriends }))`
    vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
	width:100%;
	max-width: 40px;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;
