import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../../organims/Navbar/HeaderLogged/RightNav';
export default function index() {
	const [ open, setOpen ] = useState(false);
	return (
		<React.Fragment>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open} />
		</React.Fragment>
	);
}

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 8px;

	z-index: 20;
	display: none;
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#ccc' : '#333')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&::nth-child(1) {
			transform: rotate(${({ open }) => (open ? '45deg' : '0')});
		}
		&::nth-child(2) {
			transform: translateX(${(open) => (open ? '100%' : '0')});
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&::nth-child(2) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
