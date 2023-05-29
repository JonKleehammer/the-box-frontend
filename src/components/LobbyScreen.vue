<template>
<h1>Lobby</h1>
<Button @click="test">Test</Button>
  <div>
    <h1 v-for="item in testArr">hello</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { connectActionCable, disconnectActionCable } from "@/actionCable"
import { useRoute } from "vue-router"
import { useSessionStore } from "@/stores/sessionStore";
import Button from "primevue/button";


const route = useRoute()
const lobbyCode = route.params.lobbyCode

const sessionStore = useSessionStore()
const userID = sessionStore.userID

onMounted(() => {
  connectActionCable(lobbyCode, userID)
})

onUnmounted(() => {
  disconnectActionCable()
})

const testArr = ref([])
const test = () => {
  testArr.value.push(0)
}
</script>

<style scoped>

</style>