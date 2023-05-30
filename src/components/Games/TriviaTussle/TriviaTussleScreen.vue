<template>
  <PlayerReadyCount :ready-player-count="readyPlayerCount"
                    :total-player-count="totalPlayerCount"
  />
  <component :is="gameStageComponents[0]"
             @playerReady="readyStateChange(true)"
             @playerUnready="readyStateChange(false)"
  />
</template>

<script setup>
import { ref } from 'vue';
import Tutorial from "@/components/Games/TriviaTussle/Tutorial.vue";
import PlayerReadyCount from "@/components/Games/BaseComponents/PlayerReadyCount.vue";

const gameStageComponents = [
    Tutorial
]

const readyStateChange = (readyBool) => {
  if (readyBool)
    readyPlayerCount.value++
  else
    readyPlayerCount.value--
}
// player readiness will be tarcked on the backend soon
const readyPlayerCount = ref(0)
const totalPlayerCount = ref(1)
// moving to the next stage will also be controlled by the backend


</script>

<style scoped>

</style>