import React from 'react';
import styled from 'styled-components';
import iconCloseWhite from '../../../../../public/icons/wall-profile/closeWhite.png';
import closeoff from '../../../../../public/icons/wall-profile/closeoff.png';
export default function index() {
	return (
		<Section>
			<DivoptCd>
				<DivoptCo1>
					<DivoptCoimg />
				</DivoptCo1>
				<Divoptclose>Cerrar Sesión</Divoptclose>
			</DivoptCd>
		</Section>
	);
}
const Section = styled.section`
	background-color: #595b61;
	height: 75px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const DivoptCd = styled.div`
	overflow: hidden;
	padding: 0px 10px;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover {
		background: #fff;
		cursor: pointer;
	}
	:hover div {
		color: #595b61 !important;
	}
	:hover img {
		opacity: 0;
	}
	:hover div:first-child {
		border-right: 2px solid #717171;
	}
`;
const DivoptCo1 = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${closeoff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;

const DivoptCoimg = styled.img.attrs({ src: iconCloseWhite })`
width: 40px;
margin-right: 30px;
vertical-align: middle;
border-style: none;
`;

const Divoptclose = styled.div`
	float: left;
	padding-left: 15px;
	width: 90px;
	color: #fff;
`;
