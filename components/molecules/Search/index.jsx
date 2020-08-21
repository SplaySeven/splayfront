import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImagenNoFound from '../../../public/imagenes/AvatarMasculino.png';
import searchicon from '../../../public/icons/wall-profile/btnSearch.png';
import { row, colmd4, colmd12, label } from '../../../pages/styles';
import { Search,Image } from 'semantic-ui-react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../../../gql/user';
import { size } from 'lodash';
import './Search.css'
export default function index() {
	const [ search, setSearch ] = useState(null);
	const [ results, setResults ] = useState([]);
	const { data, loading } = useQuery(SEARCH, {
		variables: { search }
	});
    
	
	useEffect(() => {
		
		if (size(data?.search) > 0) {
			const users = [];
			data.search.forEach((user, index) => {
				users.push({
					key: index,
					title: user.name,
					lastname:user.lastname,
					userid: user.id,
					avatar: user.avatar
				});
			});
			setResults(users);
		} else {
			setResults([]);
		}
	}, [data]);
    
 
	const onChange = (e) => {
		if (e.target.value) setSearch(e.target.value);
		else setSearch(null);
	};
	const hendleResultSelect=()=>{
		setSearch(null)
		setResults([])
	}
	return (
		<DivHeader2>
			<Row>
				<Colmd12>
					<FriendSearch>Búsqueda de redes y amigos</FriendSearch>
					<Search
						className="search-users"
						fluid
						input={{ icon: 'search', iconPosition: 'left' }}
						loading={loading}
						value={search||""}
						onSearchChange={onChange}
						onResultSelect={hendleResultSelect}
						results={results}
						resultRenderer={(e)=><ResultSearch data={e}/>}
					/>
				</Colmd12>
			</Row>
		</DivHeader2>
	);
}


function ResultSearch(props){
	const{data}=props;
	
	return (
		<Link href="/followers/[id]" as={`/followers/${data.userid}`}>
        <a>
		<Image className="img" src={data.avatar || ImagenNoFound}/>
		<div>
			
			<p>{data.title}</p>
	<p>{data.lastname}</p>
			
		</div>

		</a>
		
		</Link>
		
	)
}

/*<div className="search-users__item">
/*
<DivInputsearch>
<Inputsearch />
<SearchIcon />
</DivInputsearch>
*/

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
