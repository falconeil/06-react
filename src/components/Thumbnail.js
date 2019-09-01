import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {

	state = {
				text: 'Initialtext'
			}




	clickme() {
		this.setState({text: this.refs.textBox.value})}




render() {

	return (

			<div className='thumbnail'>
				<div>{this.props.p.title}</div>
				<div>{this.props.p.price}</div>
				<div>{this.props.p.location}</div>
				<button className={this.props.p.liked ? 'liked' : ''} onClick={() =>{
					this.props.setTrue(this.props.idPlace)
			 	}}>Like it!</button>

			</div>
		)
	}
}

export default Thumbnail
