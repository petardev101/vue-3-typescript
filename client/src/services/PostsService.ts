import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('/api/posts')
  },
  addPosts () {
    return Api().post('/api/posts')
  }
}
