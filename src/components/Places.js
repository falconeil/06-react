import Places from 'react'

class App extends React.Component {

state = {
	places: ['1', '2', '3', '4', '5'],
	title: ['Barcelona', 'Dublin', 'London', 'Tokyo', 'Sofia'],
	price: ['$200', '$170', '$340', '$670', '$57']

}
render() {
	return (



		<h1>{this.state.places.length}</div>,
		<p>{this.state.title} </p>
		{
		this.state.places.map((p,i) => <Places key={i}/>)
	}
	)
	}
}

export default Places
