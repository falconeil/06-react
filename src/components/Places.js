import React from 'react'
import Places from './Places.css'
//
class Places extends React.Component {
//
state = {
places: [
	{title: 'Casino Royale', price: 897 , location: 'London'},
	{title: 'Camino', price: 78 , location: 'Madrid'},
	{title: 'Transpotting', price: 1973 , location: 'Scotland'},
	{title: 'Adele', price: 2016 , location: 'Paris'},
	{title: 'Taxi', price: 2006 , location: 'Teheran'}
}

render() {
	return (

		<h1>{this.state.places.length} Places</h1>,
		<div className='thumbnails'>{this.state.places.map(p =>{
			<div className='thumbnails'>{p}</div>}
		)}
		</div>
	)
}

export default Places
