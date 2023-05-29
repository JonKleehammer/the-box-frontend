<template>
<h1>Lobby</h1>
<Button @click="test">Test</Button>
  <div>
    <h1 v-for="item in testArr">hello</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import { useSessionStore } from "@/stores/sessionStore";
import Button from "primevue/button";
import {createConsumer} from "@rails/actioncable";

// ActionCable Connection
const route = useRoute()
const lobbyCode = route.params.lobbyCode
const sessionStore = useSessionStore()
const userID = sessionStore.userID
const cable = createConsumer('ws://localhost:3000/cable')
const connection = cable.subscriptions.create({ channel: 'LobbyChannel', lobby_code: lobbyCode, user: userID }, {
  connected() {
    console.log('ActionCable connected')
  },
  disconnected() {
    console.log('ActionCable disconnected')
  },
  received(data) {
    console.log(data)
    if (data === 'DATA')
      testArr.value.push(1)
  }
})

const testArr = ref([])
const test = () => {
  connection.perform('test_action', { testKey: 'testValue' })
}
</script>

<style scoped>

</style>