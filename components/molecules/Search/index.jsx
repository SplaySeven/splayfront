import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImagenNoFound from '../../../public/imagenes/icon-avatar-default.png';

import searchicon from '../../../public/icons/wall-profile/btnSearch.png';
import { row, colmd4, colmd12, label } from '../../../styles/styles.js';
import { Search,Image } from 'semantic-ui-react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../../../gql/user';
import { size } from 'lodash';
import './Search.scss'
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
		<React.Fragment>
					<ContSearch>
						<Search
					    placeholder="Busqueda de redes y amigos"
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
					</ContSearch>
					
		</React.Fragment>
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


const ContSearch =styled.div`
 margin-top:12px;
 margin-right:10px;

`;



const SearchIcon = styled.img.attrs({ src: searchicon })`
    box-sizing: border-box;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    width: 33px;
`;
