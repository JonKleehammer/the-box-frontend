<template>
  <router-view></router-view>
<!--  <h1>HELLO</h1>-->
<!--  <button @click="sendMessage('Hello, Websocket!')">TEST</button>-->
</template>

<script setup>
  // import { ref } from 'vue';
  // import { createConsumer } from '@rails/actioncable'
  // const cable = createConsumer('ws://localhost:3000/cable')
  //
  // const subscription = cable.subscriptions.create('LobbyChannel', {
  //   received(data) {
  //     console.log(data)
  //   }
  // })
  //
  // const sendMessage = (message) => {
  //   subscription.send({
  //     action: 'test_message',
  //     payload: { message }
  //   })
  // }
</script>

<style scoped>

</style>
