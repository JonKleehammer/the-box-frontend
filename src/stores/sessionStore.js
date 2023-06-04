import {createPinia, defineStore} from 'pinia'

const pinia = createPinia()

export const useSessionStore = defineStore('session', {
  state: () => ({
    username: null,
    playerID: null,
    lobbyCode: null
  }),
  actions: {
    setSession(sessionData) {
      this.username = sessionData.user
      this.playerID = sessionData.player_id
      this.lobbyCode = sessionData.lobby
    },
    clearSession() {
      this.username = null
      this.playerID = null
      this.lobbyCode = null
    }
  }
})

export { pinia }