import axios from 'axios'

class Services {

  // search(query) {
  //   return axios({
  //     method: 'get',
  //     url: `/api/search/${query}`,
  //   })
  // }

  getHomeData() {
    return axios({
      method: 'get',
      url: `/api/home`
    })
  }

}

export default new Services();
