import React from 'react';
import styled from 'styled-components';
import imgFriends from '../../../public/imagenes/friends-on.png';

export default function index(props) {
	const { src } = props;
	return (
		<React.Fragment>
			<ImgFriends img={src} />
		</React.Fragment>
	);
}


const ImgFriends = styled.img.attrs((props) => ({ src: props.img ? props.img : imgFriends }))`
   
	border-style: none;
	padding: 0px 12px;
    box-sizing: border-box;
    width:65px;

    :hover {
        filter: brightness(0.33);
        cursor: pointer;
    }
`;
