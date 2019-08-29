import Places from 'react'

class App extends React.Component {

state = {
	places: ['1', '2', '3', '4', '5'],
	title: ['Barcelona', 'Dublin', 'London', 'Tokyo', 'Sofia'],
	price: ['$200', '$170', '$340', '$670', '$57']

}
render() {
	return (

		<div>{this.state.title}</div>,
		<p>{this.state.title} {this.state.title.length}</p>
		{
		this.state.places.map((p,i) => <Places key={i}/>)
	}
	)
	}
}

export default Places
