import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites.js'
import Thumbnail from './Thumbnail.js'
import Search from './Search.js'
//
class Places extends React.Component {
//
state = {
places: [
	{title: 'El Despertado', price: 220 , location: 'Costa Rica', liked: false},
	{title: 'Lost Villa', price: 78 , location: 'Thailand', liked: false},
	{title: 'God Save the Queen', price: 273, location: 'Scotland', liked: false},
	{title: 'Dorayaki', price: 637 , location: 'Tokyo', liked: false},
	{title: 'Inshallah', price: 2006 , location: 'Sousse', liked: false}]
}



setTrue = (i) => {
	// 1.Make a copy
	let places = this.state.places
	// 2 Change it

	places[i].liked ? places[i].liked= false : places[i].liked= true

	// 3.put it back in the state
	this.setState({
		places: places})
	}
	//copy
	//change
	//steState



render() {
	return (
		<div>
		<Search/>
			<h1>{this.state.places.length} Places</h1><div> <Favorites fav={this.state.places.filter((e => e.liked))}/></div>
			<div className='places'>
			{
				this.state.places.map((p,i) => {return <Thumbnail key={i} idPlace={i} p={p} setTrue={this.setTrue}/>})
			}
			</div>
		</div>

)
}
}

export default Places;
