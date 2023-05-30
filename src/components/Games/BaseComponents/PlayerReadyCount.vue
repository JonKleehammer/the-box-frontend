<template>
  <h1 id="player-ready-count">{{readyPlayerCount}}/{{totalPlayerCount}}</h1>
</template>

<script setup>
const { readyPlayerCount, totalPlayerCount } = defineProps(['readyPlayerCount', 'totalPlayerCount'])
</script>

<style scoped>
#player-ready-count {
  position: absolute;
  top: 30px;
  left: 30px;
}
</style>