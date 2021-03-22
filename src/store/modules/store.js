export default {
  state: {
    userName: '',
    loggedIn: false
  },
  mutations: {
    setUserName (state, userProfile) {
      state.userName = userProfile
    },
    resetUserName (state) {
      state.userName = ''
    },
    setloggedIn (state, login) {
      state.loggedIn = login
    },
    resetloggedIn (state) {
      state.userName = false
    }
  }
}
