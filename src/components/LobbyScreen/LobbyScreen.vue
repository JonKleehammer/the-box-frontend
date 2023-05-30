<template>
  <div id="lobby-screen">
    <Fieldset id="player-list" legend="Lobby">
      <div id="player-list-content">
        <PlayerCard v-for="player in playerList"
                    :player-name="player.username"
        />
      </div>
      <div id="player-list-footer">
        <InviteButton/>
      </div>
    </Fieldset>
    <Fieldset id="game-list" legend="Games">
      <div id="game-list-content">
        <GameCard v-for="game in gameList"
                  :game-name="game.name"
                  :game-disabled="game.disabled"
        />
      </div>
    </Fieldset>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSessionStore } from "@/stores/sessionStore";
import { createConsumer } from "@rails/actioncable";
import InviteButton from "@/components/LobbyScreen/InviteButton.vue";
import Fieldset from "primevue/fieldset";
import PlayerCard from "@/components/LobbyScreen/PlayerCard.vue";
import GameCard from "@/components/LobbyScreen/GameCard.vue";
import gameList from './gameList.json'

const playerList = ref([])

// ActionCable Connection
// A lot of boilerplate, might want to make this easier to re-use
const sessionStore = useSessionStore()
const { userID, username, lobbyCode } = sessionStore
const cable = createConsumer('ws://localhost:3000/cable')
const connection = cable.subscriptions.create({ channel: 'LobbyChannel', lobby_code: lobbyCode, user_id: userID, username: username }, {
  connected() {
    console.log('ActionCable connected')
  },
  disconnected() {
    console.log('ActionCable disconnected')
  },
  received(data) {
    console.log(data)
    if (data.action === 'UPDATE_PLAYERS')
      playerList.value = data.payload
  }
})
</script>

<style scoped>
#lobby-screen {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

#player-list {
  display: flex;
  flex-direction: column;
}

#player-list-content {
  height: 600px;
  width: 200px;
  flex: 1 0 auto;

  display:flex;
  flex-direction: column;
  gap: 10px;
}

#player-list-footer {
  display: flex;
  flex-direction: row;
  justify-content: right;
}

#game-list-content {
  width: 500px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>