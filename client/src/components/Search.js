import React, {Component} from 'react'
import services from '../Services'
import SearchRow from './SearchRow'
import {Redirect} from 'react-router-dom'




class Search extends Component {


  constructor(props){
    super(props)
    this.state = {
      apiDataLoaded: false,
      apiData: null,
      row1: null,
      row2: null,
      row3: null,
      row4: null,
      row5: null,
      row6: null,
      search: null,
      fireRedirect: false,
      searchLink: null
    }
    this.renderResults = this.renderResults.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      search: value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let searchQuery = this.state.search
    searchQuery = searchQuery.replace(/ /gi, "%20")
    this.setState({
      searchLink: searchQuery,
      fireRedirect: true
    })
  }

  componentDidMount() {
    services.search(this.props.match.params.query)
    .then(data => {
      let arr1 = []
      let arr2 = []
      let arr3 = []
      let arr4 = []
      let arr5 = []
      let arr6 = []
      arr1 = data.data.data.splice(0,4)
      arr2 = data.data.data.splice(0,4)
      arr3 = data.data.data.splice(0,4)
      arr4 = data.data.data.splice(0,4)
      arr5 = data.data.data.splice(0,4)
      arr6 = data.data.data.splice(0,4)
      this.setState({
        apiDataLoaded: true,
        apiData: data,
        row1: arr1,
        row2: arr2,
        row3: arr3,
        row4: arr4,
        row5: arr5,
        row6: arr6
      })

    })
    .catch(err => {
      console.log(err)
    })
  }

  renderResults() {

    return (
      <div>
        <br/>
        <h2>Top Search Results for "{this.props.match.params.query}"</h2>
        <br/>
        <SearchRow results={this.state.row1} />
        <SearchRow results={this.state.row2} />
        <SearchRow results={this.state.row3} />
        <SearchRow results={this.state.row4} />
        <SearchRow results={this.state.row5} />
        <SearchRow results={this.state.row6} />
      </div>
    )

  }

  render() {
    return (
        <div className="App">
          <div className="formLeft">
            <a className="logo" href="/">TubeFlix</a>
            <form onSubmit={this.handleFormSubmit}>
              <input type='text' name='search' onChange={this.handleInputChange} placeholder='search query...' size="60"/>
              <input type='submit' value="Search"/>
            </form>
          </div>
        {this.state.apiDataLoaded ? this.renderResults() : <h2>Loading...</h2>}
        {this.state.fireRedirect ? <Redirect to={`/search/${this.state.searchLink}`} /> : ''}
      </div>
    )

    }

  }

  export default Search
