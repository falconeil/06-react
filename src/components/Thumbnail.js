import React from 'react'
import '../styles/Thumbnail.css'




class Thumbnail extends React.Component {

state = {
			liked: false
		}




setTrue() {

	!this.state.liked ? this.setState({
			liked: true
		}) :	this.setState({
			liked: false
		})
	}









render() {



	return (

			<div className='thumbnail'>
				{console.log(this.state.liked)}
				<div>{this.props.p.location}</div>


				<button onClick={(e) => this.setTrue()}>Click me</button>

			</div>
		)
	}

}



export default Thumbnail
