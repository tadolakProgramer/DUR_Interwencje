import Api from '../services/Api'

export default {
  register (credentials) {
    return Api().post('/register', credentials);
  },
  login (credentials) {
    return Api().post('/login', credentials);
  },
  getHale () {
    return Api().get('/register');
  },
  getTypyMaszyn () {
      return Api().get('/typyMaszyn');
  }

}
