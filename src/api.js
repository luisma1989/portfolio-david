import axios from 'axios'

axios.defaults.baseURL = process.env.API_HOST || 'http://localhost:3000'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

function request(method, params) {
  return axios({
    // withCredentials: true,
    ...params,
    method,
  })
}

const get = (params) => request('get', params)
// const post = (params) => request('post', params)

export const getHeader = () => get({
  url: '/api/header'
})
