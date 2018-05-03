import React, {Component} from 'react'
// import {Slide} from 'react-slideshow-image'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-alice-carousel/lib/alice-carousel.css"
import AliceCarousel from 'react-alice-carousel';

class Category extends Component {


  renderVideos() {

    return this.props.videos.data.data.map((el,i) => {
      let link = "https://www.youtube.com/embed/" + el.id
      console.log(el)
      return (
          <div key={i}>
            <iframe title={i} src={link} />
          </div>
      )
    })

  }


  render() {

    const responsive = {
  0: {
    items: 1
  },
  600: {
    items: 3
  },
  1024: {
    items: 4
  }
}

    return (
      // <Carousel showThumbs={false}>
      //   {this.renderVideos()}
      // </Carousel>
      <AliceCarousel responsive={responsive}>
        {/* <iframe title="a" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="b" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="c" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="d" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
        <iframe title="e" src="https://www.youtube.com/embed/n0F6hSpxaFc" /> */}
        {this.renderVideos()}
      </AliceCarousel>

    )
  }

}

export default Category
