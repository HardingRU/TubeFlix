import React, {Component} from 'react'
import services from '../Services'
import SearchRow from './SearchRow'



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
      row6: null
    }
    this.renderResults = this.renderResults.bind(this);

  }

  componentDidMount() {
    services.search(this.props.match.params.query)
    .then(data => {
      console.log("search data", data)
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


      console.log(this.state.row1)
      console.log(this.state.row6)

    })
    .catch(err => {
      console.log(err)
    })
  }

  renderResults() {

    return (
      <div>
        <h1>Search Results for {this.props.match.params.query}</h1>
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
      <div>
        {this.state.apiDataLoaded ? this.renderResults() : <h1>Loading...</h1>}
      </div>
    )

    }

  }

  export default Search
