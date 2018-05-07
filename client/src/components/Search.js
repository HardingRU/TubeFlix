import React, {Component} from 'react'
import services from '../Services'


class Search extends Component {


  constructor(props){
    super(props)
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }

  componentDidMount() {
    services.search(this.props.match.params.query)
      .then(data => {
        console.log("search data", data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {

    console.log("props", this.props.match.params.query)

    return (
      <h1>Search Results for {this.props.match.params.query}</h1>

    )
  }

}

export default Search
