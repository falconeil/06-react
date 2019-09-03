import React from 'react'
import '../styles/Places.css'
import Favorites from './Favorites'
import Thumbnail from './Thumbnail'
import Search from './Search'

class Places extends React.Component {

state = {
	places: [{
		title: 'Terra Catalana',
		price: 56,
		location:'Barcelona',
		liked: false
	},
	{
		title: 'Madriles',
		price: 886,
		location:'Madrid',
		liked: false
	},
	{
		title: 'Getxo',
		price: 106,
		location:'Bilbao',
		liked: false
	},
	{
		title: 'OCoruña',
		price: 300,
		location:'Galicia',
		liked: false
	}],
}


toggle = (i) => {

let places = this.state.places

places[i].liked ? places[i].liked= false : places[i].liked= true

this.setState({
	places: places
})
}

	render() {

		return (
			<div>
				<h1>{this.state.places.length} Places </h1>
				<div className='thumbnails'>{
				this.state.places.map((n, i) => {return <Thumbnail  n={n} toggle={this.toggle} index={i}/>
			})
			}</div>
					<Favorites fav={this.state.places.filter((e) => e.liked)}/>
	</div>

		)
	}
}

export default Places
