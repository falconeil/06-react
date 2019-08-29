import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites.js'
//
class Places extends React.Component {
//
state = {
places: [
	{title: 'Casino Royale', price: 897 , location: 'London'},
	{title: 'Camino', price: 78 , location: 'Madrid'},
	{title: 'Transpotting', price: 1973 , location: 'Scotland'},
	{title: 'Adele', price: 2016 , location: 'Paris'},
	{title: 'Taxi', price: 2006 , location: 'Teheran'}]
}

render() {
	return (
		<div>
		<h1>{this.state.places.length} Places <Favorites /></h1>
		<div className='places'>
		{
			this.state.places.map((p, i) => <div className='thumbnail'  key={i}>{p.title}</div>)
		}
		</div>

		</div>

)}
}

export default Places;
