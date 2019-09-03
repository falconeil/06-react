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
	originalPlaces:[]
}

componentWillMount(){
	this.setState({
		originalPlaces: this.state.places
	})
}

toggle = (i) => {

let places = this.state.places

places[i].liked ? places[i].liked= false : places[i].liked= true

this.setState({
	places: places
})
}

search = (e) => {

	let letters = e.target.value.toUpperCase()
	console.log(e)

	let places = this.state.originalPlaces.filter((a) =>  a.title.toUpperCase().includes(letters))

	this.setState({
		places: places
	})
}



	render() {

		return (
			<div>
			<Search search={this.search}/>
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
