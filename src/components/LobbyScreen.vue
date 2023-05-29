<template>
<h1>Lobby</h1>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { connectActionCable, disconnectActionCable } from "@/actionCable";

onMounted(() => {
  connectActionCable()
})

onUnmounted(() => {
  disconnectActionCable()
})
</script>

<style scoped>

</style>