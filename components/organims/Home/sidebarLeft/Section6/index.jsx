import React from 'react';
import styled from 'styled-components';
import iconwall from '../../../../../public/imagenes/icons/wall-profile/Muro-Personal.png';
import walloff from '../../../../../public/imagenes/icons/wall-profile/Muro-Personal-off.png';
export default function index() {
	return (
		<Section6>
			<DivoptCd2>
				<DivoptCo>
					<DivoptCoimg2 />
				</DivoptCo>
				<Divoptclose>Muro Personal</Divoptclose>
			</DivoptCd2>
		</Section6>
	);
}
const Section6 = styled.section`
	height: 75px;
	border-right: 15px solid #c4e0dd;
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

const DivoptCd2 = styled(DivoptCd)`
overflow: hidden;
background: #00a79d;
`;
const DivoptCo = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${walloff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;

const DivoptCoimg2 = styled.img.attrs({ src: iconwall })`
width: 40px;
margin-right: 26px;
vertical-align: middle;
border-style: none;
`;
const Divoptclose = styled.div`
	float: left;
	padding-left: 15px;
	width: 90px;
	color: #fff;
`;
