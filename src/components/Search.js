import React from 'react'
import '../styles/Search.css'


class Search extends React.Component {



render() {

	return (

			<div className='searchBar'>
				<input type='text' placeholder="Search" onChange={this.props.search}/>
			</div>


		)
	}
}


export default Search
