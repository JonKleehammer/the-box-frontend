<template>
  <PlayerReadyCount :ready-player-count="readyPlayerCount"
                    :total-player-count="totalPlayerCount"
  />
  <component :is="gameStageComponents[currentStage]"
             @playerReady="readyStateChange(true)"
             @playerUnready="readyStateChange(false)"
  />
</template>

<script setup>
import { ref } from 'vue';
import PlayerReadyCount from "@/components/Games/BaseComponents/PlayerReadyCount.vue";
import Tutorial from "@/components/Games/TriviaTussle/Tutorial.vue";
import ChooseTopic from "@/components/Games/TriviaTussle/ChooseTopic.vue";
import WriteQuestion from "@/components/Games/TriviaTussle/WriteQuestion.vue";
import QuestionBoard from "@/components/Games/TriviaTussle/QuestionBoard.vue";

const currentStage = ref(0)
const gameStageComponents = [
    Tutorial,
    ChooseTopic,
    WriteQuestion,
    QuestionBoard
]

const readyStateChange = (readyBool) => {
  if (readyBool)
    readyPlayerCount.value++
  else
    readyPlayerCount.value--
  if (readyPlayerCount >= totalPlayerCount) {
    currentStage.value++
    readyPlayerCount.value = 0
  }
}
// player readiness will be tarcked on the backend soon
const readyPlayerCount = ref(0)
const totalPlayerCount = ref(1)
// moving to the next stage will also be controlled by the backend


</script>

<style scoped>

</style>