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

  get44() {
    return axios({
      method: 'get',
      url: '/api/44'
    })
  }

}

export default new Services();
