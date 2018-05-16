import React, {Component} from 'react'
// import {Slide} from 'react-slideshow-image'
//import { Carousel } from 'react-responsive-carousel';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class SearchRow extends Component {


  renderRow() {
    console.log(this.props)
      return this.props.results.map((el,i) => {
        let link = "https://www.youtube.com/watch?v=" + el.id.videoId
        return (
            <div className="col-xs-6 col-md-3" key={i}>
              <a href={link} className="thumbnail">
              <img src={el.snippet.thumbnails.default.url} alt="...">
              </img>
              </a>
            </div>
        )
    })
  }


  render() {

    return (
      <div>
        <div className="row">
          {this.renderRow()}
        </div>
      </div>
    )
  }

}

export default SearchRow
