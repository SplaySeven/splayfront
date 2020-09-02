import React from 'react'
import styled from 'styled-components'

function Index ({children,href}){
    return href
?<LinkStyled href={href}>{children}</LinkStyled>
:<button>{children}</button>
}

export default Index

/*const LinkStyled = styled.button` backup*/
const LinkStyled = styled.a`
	border: 3px solid white;
	color: #ffff;
	background-color:#00A79D;
	padding: 2px 2px;
	border-radius: 15px;
	margin: 2px 2px;
	width: 12%; 
	height: 20px;
	box-sizing: content-box;
	display: inline-block;
    text-decoration:none;
	white-space: normal;
	word-wrap: break-Word;
	text-align:center;
	:hover {
		background: white;
		color: #808080;
		border: 3px solid #808080;
	}
`;