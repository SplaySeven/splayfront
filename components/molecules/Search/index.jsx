import React from 'react';
import styled from 'styled-components';
import searchicon from '../../../public/icons/wall-profile/btnSearch.png';
import { row, colmd4, colmd12, label } from '../../../pages/styles';

export default function index() {
	return (
		<DivHeader2>
			<Row>
				<Colmd12>
					<FriendSearch>Búsqueda de redes y amigos</FriendSearch>
					<DivInputsearch>
						<Inputsearch />
						<SearchIcon />
					</DivInputsearch>
				</Colmd12>
			</Row>
		</DivHeader2>
	);
}

//Css
const DivHeader2 = styled.div`
	${colmd4} -ms-flex: 0 0 28.333333%;
	flex: 0 0 28.333333%;
	max-width: 28.333333%;
`;
const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Colmd12 = styled.div`${colmd12};`;

const FriendSearch = styled.label`${label} color: #fff !important;`;
const DivInputsearch = styled.div`
	background: #fff;
	width: 310px;
	padding: 3px 0px;
	box-sizing: border-box;
`;
const Inputsearch = styled.input.attrs({ placeholder: 'Buscar' })`
width: 270px;
-webkit-text-decoration: none;
text-decoration: none;
border: 3px solid white;
background: #fff;
outline: none;
color: #808080;
border: 1px solid #fff;
border-left-color: rgb(255, 255, 255);
border-left-style: solid;
border-left-width: 1px;
border-left-color: rgb(225, 225, 225);
border-left-style: solid;
border-left-width: 1px;
overflow: visible;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
box-sizing: border-box;
`;

const SearchIcon = styled.img.attrs({ src: searchicon })`
    box-sizing: border-box;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    width: 33px;
`;
