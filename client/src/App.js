import React, { Component } from 'react';
import services from './Services'
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
  }


  componentDidMount() {
      services.getHomeData()
      .then(data => {
        console.log(data)
        // this.setState({
        //   isLoggedIn: resp.data.isLoggedIn,
        //   username: resp.data.token.username
        // })
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

  // process the user add
  handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted")
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to TubeFlix</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' name='search' onChange={this.handleInputChange} placeholder='Search Here' />
          <input type='submit' value="Search Here"/>
        </form>
      </div>
    );
  }
}

export default App;
