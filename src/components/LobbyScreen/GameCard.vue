<template>
  <BlockUI :blocked="gameDisabled">
    <div class="game-card">
      {{ gameName }}
    </div>
  </BlockUI>
</template>

<script setup>
import BlockUI from 'primevue/blockui';

const { gameName, gameDisabled } = defineProps(['gameName', 'gameDisabled'])
</script>

<style scoped>
.game-card {
  width: 120px;
  height: 80px;
  background-color: #354050;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  text-align: center;
}

.game-card:hover {
  filter: brightness(130%);
  cursor: pointer;
}
</style>