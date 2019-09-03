import React from 'react'
// import '../styles/Place.css'

class Place extends React.Component {

	state= {
	images: [
	'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
	'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
	'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
	'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'],

	}


	render() {




return(
<div>
<div style= {{backgroundImage: 'url('+this.state.images[0]+')', height: '600px', backgroundRepeat: 'no-repeat',  width: '850px', 	backgroundSize: 'cover',
	backgroundPosition: 'center'
}} ></div>
<div style= {{backgroundImage: 'url('+this.state.images[1]+')', height: '100px', backgroundRepeat: 'no-repeat',  width: '100px', 	backgroundSize: 'cover',
	backgroundPosition: 'center'
}} ></div>
<div style= {{backgroundImage: 'url('+this.state.images[2]+')', height: '100px', backgroundRepeat: 'no-repeat',  width: '100px', 	backgroundSize: 'cover',
	backgroundPosition: 'center'
}} ></div>
<div style= {{backgroundImage: 'url('+this.state.images[3]+')', height: '100px', backgroundRepeat: 'no-repeat',  width: '100px', 	backgroundSize: 'cover',
	backgroundPosition: 'center'
}} ></div>



</div>

		)
	}
}

export default Place
