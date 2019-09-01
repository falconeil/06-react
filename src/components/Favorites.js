import React from 'react'
import '../styles/Favorites.css'
import Thumbnail from './Thumbnail.js'
class Favorites extends React.Component {

render() {
	return (

		<div className='favorites'>	{this.props.fav.map(p => <Thumbnail p={p} /> )
		}</div>
	)
}
}

export default Favorites
