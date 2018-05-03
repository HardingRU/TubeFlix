import React, { Component } from 'react';
import services from './Services'
import Category from './components/Category'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navBar'
import Dropdown from './components/dropDown'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiDataLoaded: false,
      apiData: null,
      search: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderVideos = this.renderVideos.bind(this);

  }


  componentDidMount() {
      services.getHomeData()
      .then(data => {
        this.setState({
           apiData: data,
           apiDataLoaded: true
         })
      })
      .catch(err => {
        console.log(err)
      })
    }


  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
       search: value
     })
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  renderVideos() {
    return (
      <Category videos={this.state.apiData}/>
    )
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleFormSubmit}>
          <input type='text' name='search' onChange={this.handleInputChange} placeholder='Search Here' />
          <input type='submit' value="Search Here"/>
        </form>
        {this.state.apiDataLoaded ? this.renderVideos() : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
