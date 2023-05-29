import {createPinia, defineStore} from 'pinia'

const pinia = createPinia()

export const useSessionStore = defineStore('session', {
  state: () => ({
    username: null,
    userID: null,
    lobbyCode: null
  }),
  actions: {
    setSession(sessionData) {
      this.username = sessionData.user
      this.userID = sessionData.user_id
      this.lobbyCode = sessionData.lobby
    },
    clearSession() {
      this.username = null
      this.userID = null
      this.lobbyCode = null
    }
  }
})

export { pinia }