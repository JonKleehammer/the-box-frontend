<template>
  <Card id="login-form">
    <template #title> Welcome to The Box</template>
    <template #subtitle>A multiplayer project in Alpha</template>
    <template #content>
      <div class="p-inputgroup flex-1">
        <InputText id="username" placeholder="username" v-model="username"/>
        <Button @click="login">Login</Button>
      </div>
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
const lobbyCode = route.params.lobbyCode !== '' ? route.params.lobbyCode : null

const login = async () => {
  try {
    await axios.post('/api/login', {
      username: username.value,
      lobby: lobbyCode
    })
    .then(response => {
      const { lobby, username, player_id } = response.data
      sessionStore.setSession({ lobby, username, player_id })
      goToLobby(lobby)
    })
  }
  catch (error) {
    console.error(error)
  }
}

const goToLobby = (lobbyCode) => {
  console.log('go to lobby')
  router.push({ name: 'Lobby', params: { lobbyCode } })
}
</script>

<style scoped>


#login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-form :deep(.p-card-body) {
  width: 350px;
}

#login-form :deep(.p-card-title), #login-form :deep(.p-card-subtitle) {
  text-align: center;
}

#login-form :deep(.p-card-content) {
  display: flex;
  justify-content: center;
}

#username {
  flex: 1 0 auto;
}
</style>