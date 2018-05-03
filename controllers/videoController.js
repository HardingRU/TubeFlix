const Videos = require('../models/videosDB');
const videoController = {};
const axios = require('axios');
var util = require('util');

// axios.get("https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=10&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso")


videoController.getHome = (req, res) => {

   axios.get("https://www.googleapis.com/youtube/v3/videos?chart=mostpopular&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&maxResults=10")
    .then(videos => {
      console.log(videos.data.items[1].id.videoId)
      let test = []
      for(let i = 0; i < videos.data.items.length; i++)
      {
        test.push(videos.data.items[i])
      }
      res.json({
        data: test
      })
    })
    .catch(err => {
      console.log(err)
    })
}

videoController.get44 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=44&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
     console.log(videos.data.items[1].id.videoId)
     let test = []
     for(let i = 0; i < videos.data.items.length; i++)
     {
       test.push(videos.data.items[i])
     }
     res.json({
       data: test
     })
   })
   .catch(err => {
     console.log(err)
   })

}

module.exports = videoController;
