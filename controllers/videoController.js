const Videos = require('../models/videosDB');
const videoController = {};
const axios = require('axios');
var util = require('util');

videoController.getHome = (req, res) => {

  // Videos.getHome()
  //   .then(videos => {
  //     res.json({
  //       message: 'ok',
  //       data: { videos },
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(400).json({message: '400', err});
  //   });
  console.log("inside controller")

  axios.get("https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso")
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
      // res.json({
      //   data: videos
      // })


    })
    .catch(err => {
      console.log(err)
    })

}

module.exports = videoController;