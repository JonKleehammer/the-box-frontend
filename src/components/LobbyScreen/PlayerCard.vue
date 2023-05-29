<template>
 <div class="player-card">
   {{ playerName }}
 </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { playerName } = defineProps(['playerName'])
</script>

<style scoped>
.player-card {
  padding: 10px;
  border-radius: 4px;
  background-color: #354050;
}
</style>