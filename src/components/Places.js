import Places from 'react'

class App extends React.Component {

state = {
	places: ['1', '2', '3', '4', '5'],
	title: ['Barcelona', 'Dublin', 'London', 'Tokyo', 'Sofia'],
	price: ['$200', '$170', '$340', '$670', '$57']

}
render() {
	return (

		<h1>{this.state.places.length} Places</div>,
		<div className='thumbnails'>{this.state.places.map((p,i) =>{
			p {this.state.places.title} {this.state.places.price}
		} </div>

	)
	}
}

export default Places
