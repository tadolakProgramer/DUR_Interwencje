import axios from 'axios'
import store from "../store/store";

export default () => {
  return axios.create({
    baseURL: 'http://localhost:80/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
