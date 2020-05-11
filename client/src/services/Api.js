import axios from 'axios'
import store from "../store/store";

export default () => {
  return axios.create({
    baseURL: 'http://localhost:5002',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
