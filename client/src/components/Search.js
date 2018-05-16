import React, {Component} from 'react'
import services from '../Services'


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
    return this.state.apiData.data.data.map((el,i) => {
      let link = "https://www.youtube.com/watch?v=" + el.id.videoId
      return (
          <div key={i}>
            <a href={link}><img alt="" src={el.snippet.thumbnails.high.url} width="320" height="200"></img></a>
            <a href={link}><p>{el.snippet.title}</p></a>
          </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.state.apiDataLoaded ? this.renderResults() : <h1>Loading...</h1>}
      </div>
    )


    // if(this.state.apiDataLoaded === true) {
    //   return (
    //   <div>
    //     <h1>Search Results for {this.props.match.params.query}</h1>
    //     <div className="row">
    //       <div className="col-xs-6 col-md-3">
    //         <a href={this.state.apiData.data.data[3].snippet.thumbnails.default.url} className="thumbnail">
    //           <img src={this.state.apiData.data.data[3].snippet.thumbnails.default.url} alt="...">
    //           </img>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //
    //     )
    // }
    // else {
    //   return (
    //     <h1> Loading... </h1>
    //   )
    // }

    }

  }

  export default Search
