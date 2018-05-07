const Videos = require('../models/videosDB');
const videoController = {};
const axios = require('axios');
var util = require('util');

// GET VIDEO CATEGORIES
// https://www.googleapis.com/youtube/v3/videoCategories?regionCode=US&part=snippet%20&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso

// axios.get("https://www.googleapis.com/youtube/v3/search?q=surfing&maxResults=10&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso")

videoController.search = (req, res) => {
  console.log(req.params.query)
  axios.get(`https://www.googleapis.com/youtube/v3/search?q=${req.params.query}&maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso`)
  .then(videos => {
    console.log(videos)
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

videoController.getHome = (req, res) => {

  axios.get("https://www.googleapis.com/youtube/v3/videos?chart=mostpopular&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&maxResults=25")
  .then(videos => {
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

videoController.get20 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=20&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
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

videoController.get17 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=17&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
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

videoController.get10 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=10&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
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

videoController.get23 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=23&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
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

videoController.get25 = (req, res) => {

    axios.get("https://www.googleapis.com/youtube/v3/search?maxResults=25&part=snippet&key=AIzaSyCYqJ6rEU6AtQW4Friv5Hly0pYIylhARso&videoCategoryId=25&type=video&publishedAfter=2018-04-20T00:00:00Z")
    .then(videos => {
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
