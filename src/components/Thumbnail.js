import React from 'react';
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {




	render() {


		return(

			<div className='border'>
				<div className='thumbnail'>{this.props.n.title} </div>
				<div className='thumbnail'>{this.props.n.price} </div>
				<div className='thumbnail'>{this.props.n.location} </div>
				<button className={this.props.n.liked ? 'liked' : ''} onClick={ () => {this.props.toggle(this.props.index)}}>Click me</button>
			</div>

		)
	}
}

export default Thumbnail
