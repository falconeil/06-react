import React from 'react'
import '../styles/Search.css'


class Search extends React.Component {

render() {

	return (

			<div className='searchBar'>
				<input ref='textBox'  type='text' placeholder="Search" onChange={this.state.search}/>
			</div>


		)
	}
}


export default Search
