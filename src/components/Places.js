import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites.js'
import Thumbnail from './Thumbnail.js'
//
class Places extends React.Component {
//
state = {
places: [
	{title: 'El Despertado', price: 220 , location: 'Costa Rica'},
	{title: 'Lost Villa', price: 78 , location: 'Thailand'},
	{title: 'God Save the Queen', price: 273 , location: 'Scotland'},
	{title: 'Dorayaki', price: 637 , location: 'Tokyo'},
	{title: 'Inshallah', price: 2006 , location: 'Sousse'}]
}

render() {
	return (
		<div>
			<h1>{this.state.places.length} Places <Favorites /></h1>
			<div className='places'>
			{
				this.state.places.map((p,i) => {return <Thumbnail key={i} p={p}/>})
			}
			</div>
		</div>

)
}
}

export default Places;
