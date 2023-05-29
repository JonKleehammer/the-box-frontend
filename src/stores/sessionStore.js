import {createPinia, defineStore} from 'pinia'

const pinia = createPinia()

export const useSessionStore = defineStore('session', {
  state: () => ({
    username: null,
    userID: null,
    lobby: null
  }),
  actions: {
    setSession(sessionData) {
      this.username = sessionData.user
      this.userID = sessionData.user_id
      this.lobby = sessionData.lobby
    },
    clearSession() {
      this.username = null
      this.userID = null
      this.lobby = null
    }
  }
})

export { pinia }