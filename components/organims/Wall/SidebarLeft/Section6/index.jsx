import React from 'react';
import styled from 'styled-components';
import iconwall from '../../../../../public/icons/wall-profile/wall-on.png';
import walloff from '../../../../../public/icons/wall-profile/wall-off.png';
export default function index() {
	return (
		<Section>
			<DivoptCd2>
				<DivoptCo>
					<DivoptCoimg2 />
				</DivoptCo>
				<Divoptclose>Muro Social</Divoptclose>
			</DivoptCd2>
		</Section>
	);
}

const Section = styled.section`
	height: 75px;
	background-color: firebrick;
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
margin-right: 25px;
vertical-align: middle;
border-style: none;
`;

const Divoptclose = styled.div`
	float: left;
	padding-left: 5px;
	width: 90px;
	color: #fff;
`;
