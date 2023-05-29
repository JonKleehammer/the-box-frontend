<template>
  <Card id="login-form">
    <template #title> Welcome to The Box</template>
    <template #subtitle>A multiplayer project in Alpha</template>
    <template #content>
      <InputText id="username" placeholder="username" v-model="username"/>
    </template>
    <template #footer>
      <Button @click="login">Login</Button>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
import axios from 'axios';
import { useSessionStore } from "@/stores/sessionStore";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';

// pulling in pieces of the app
const sessionStore = useSessionStore()
const router = useRouter()

const username = ref(null)

const route = useRoute()
const lobbyID = route.query.c

const login = async () => {
  try {
    await axios.post('/api/login', {
      username: username.value,
      lobby: lobbyID
    })
    .then(response => {
      const { lobby, user, user_id } = response.data
      sessionStore.setSession({ lobby, user, user_id })
      goToLobby(lobby)
    })
  }
  catch (error) {
    console.error(error)
  }
}

const goToLobby = (lobbyCode) => {
  router.push({ name: 'lobby', params: { lobbyCode } })
}
</script>

<style scoped>


#login-form {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/ .p-card-title, /deep/ .p-card-subtitle {
  text-align: center;
}

/deep/ .p-card-footer{
  display: flex;
  justify-content: right;
}
</style>