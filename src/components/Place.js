import React from 'react'
// import '../styles/Place.css'

class Place extends React.Component {

	state= {
	images: [
	'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
	'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
	'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
	'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'],
	selectedImage: ''
	}
componentWillMount(){
	this.setState({
		selectedImage: this.state.images[0]
	})
}


changePic = (i) => {

this.setState({
	selectedImage: this.state.images[i]
})



}

	render() {




return(
	<div>

		<div style= {{backgroundImage: 'url('+this.state.images[0]+')', height: '600px', backgroundRepeat: 'no-repeat',  width: '850px', 	backgroundSize: 'cover',
		backgroundPosition: 'center'
	}} ></div>

	{this.state.images.map((e,i) =>{
		return <div onClick={() => { this.changePic(i)}} style= {{backgroundImage: 'url('+this.state.images[i]+')', height: '100px', backgroundRepeat: 'no-repeat',  width: '150px', 	backgroundSize: 'cover',
		backgroundPosition: 'center'
	}} ></div>
})}

</div>

		)
	}
}

export default Place
