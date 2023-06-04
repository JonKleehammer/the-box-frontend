<template>
 <div class="player-card">
   {{ username }}
   <i v-if="isLeader" class="pi pi-star-fill"/>
 </div>
</template>

<script setup>
const { username, isLeader } = defineProps(['username', 'isLeader'])
</script>

<style scoped>
.player-card {
  padding: 10px;
  border-radius: 4px;
  background-color: #354050;
}
</style>