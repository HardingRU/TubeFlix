import React, { Component } from 'react';
import services from './Services'
import Category from './components/Category'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navBar'
import Dropdown from './components/dropDown'
import Search from './components/Search'
import Home from './components/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'



import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      user_name: '',
      fireRedirect: true,

    }
  }


render(){
    return (
      <Router>
        <div className="App">
          {/* <a href='/login'><button onClick={this.logout.bind(this)}>Logout</button></a> */}
          <Route exact path='/' component={Home} />
          <Route path='/search/:query' component={Search}/>
        </div>
      </Router>
    )
  }
}


export default App;
