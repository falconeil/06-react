import React from 'react'
import '../styles/Search.css'
class Search extends React.Component {


state = {
			text: 'Initialtext'
		}




clickme() {
	this.setState({text: this.refs.textBox.value})}


render() {

	return (

			<div className='searchBar'>
			{this.state.text}
			<input ref='textBox'  type='text'/>
			<button className='filterButton' onClick={(e)=>{ this.clickme() }}>Click me</button>
			</div>
		)
	}
}


export default Search
