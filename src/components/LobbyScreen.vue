<template>
<h1>Lobby</h1>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { connectActionCable, disconnectActionCable } from "@/actionCable"
import { useRoute, useRouter } from "vue-router"
import { useSessionStore } from "@/stores/sessionStore";

const router = useRouter()
const route = useRoute()
const lobbyCode = route.params.lobbyCode

const sessionStore = useSessionStore()
const userID = sessionStore.userID
if (!userID)
  router.push({ name: 'login', params: { lobbyCode }})

onMounted(() => {
  connectActionCable(lobbyCode, userID)
})

onUnmounted(() => {
  disconnectActionCable()
})
</script>

<style scoped>

</style>