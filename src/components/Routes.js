import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Places from './Places'
import Place from './Place'
import {Link} from 'react-router-dom'


class Routes extends React.Component {
	render () {
  return (
    <BrowserRouter>
			<Link to="/">Places</Link>
			<Link to="/Place">Place</Link>
      <Switch>
  			<Route path='/Place' component={Place} />
        <Route path='/' component={Places} />

      </Switch>
    </BrowserRouter>
  )
}
}




export default Routes
