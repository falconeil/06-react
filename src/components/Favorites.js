import React from 'react'
import '../styles/Favorites.css'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {


	render() {

		return(
			<div className='favorites'>
{this.props.fav.map(n => <Thumbnail n={n}/>)}
			</div>
		)
	}
}

export default Favorites
