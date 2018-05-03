import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import {Slide} from 'react-slideshow-image'

class Category extends Component {


  renderVideos() {
    const imageArray = []
    console.log(this.props.videos.data.data[0])
    for (let i = 0; i < this.props.videos.data.data.length; i ++) {
      imageArray.push(this.props.videos.data.data[i].snippet.thumbnails.high.url)
    }
    // return this.props.videos.data.data.map((el,i) => {
      // console.log(el)
      return (
            <Slide images={imageArray} duration={5000} transitionDuration={1000}/>
      )
    // })

  }


  render() {
    return (
      <div>
          {this.renderVideos()}
        </div>

    )
  }

}

export default Category
