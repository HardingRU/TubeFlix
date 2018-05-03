import React, {Component} from 'react'
import YouTube from 'react-youtube'

class Category extends Component {


  renderVideos() {
    return this.props.videos.data.data.map((el,i) => {
      return <YouTube key={i} url={el.id.videoId}/>
    })

  }

  render() {
    return (
      <div className="catDiv">{this.renderVideos()}</div>
    )
  }

}

export default Category
