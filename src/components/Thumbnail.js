import React from 'react'
import '../styles/Thumbnail.css'
//
class Thumbnail extends React.Component {

render() {
	return (


		<div className='thumbnail'>{this.props.p.title}</div>
	)
}
}

export default Thumbnail
