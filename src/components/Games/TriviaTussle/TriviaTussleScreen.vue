<template>
  <PlayerReadyCount :ready-player-count="readyPlayerCount"
                    :total-player-count="totalPlayerCount"
  />
  <component :is="gameStageComponents[currentStage]"
             :game-state="gameState"
             @playerReady="readyStateChange(true)"
             @playerUnready="readyStateChange(false)"
             @playerInput="loadNextStage"
  />
</template>

<script setup>
import { ref } from 'vue';
import PlayerReadyCount from "@/components/Games/BaseComponents/PlayerReadyCount.vue";
import Tutorial from "@/components/Games/TriviaTussle/Tutorial.vue";
import ChooseTopic from "@/components/Games/TriviaTussle/ChooseTopic.vue";
import WriteQuestion from "@/components/Games/TriviaTussle/WriteQuestion.vue";
import QuestionBoard from "@/components/Games/TriviaTussle/QuestionBoard.vue";
import AnswerQuestion from "@/components/Games/TriviaTussle/AnswerQuestion.vue";
import { useSessionStore } from "@/stores/sessionStore";
import { createConsumer } from "@rails/actioncable";
import { useRoute } from "vue-router";

const route = useRoute()
const gameID = route.params.gameID

const sessionStore = useSessionStore()
const { playerID, lobbyCode } = sessionStore
const cable = createConsumer('ws://localhost:3000/cable')
const connection = cable.subscriptions.create({ channel: 'TriviaTussleChannel', lobby_code: lobbyCode, player_id: playerID, game_id:  gameID }, {
  connected() {
    console.log('ActionCable connected')
  },
  disconnected() {
    console.log('ActionCable disconnected')
  },
  received(data) {
    console.log(data)
  }
})

const currentStage = ref(0)
const gameStageComponents = [
    Tutorial,
    ChooseTopic,
    WriteQuestion,
    QuestionBoard,
    AnswerQuestion,
    QuestionBoard,
    AnswerQuestion,
    QuestionBoard,
    AnswerQuestion
]

const readyStateChange = (readyBool) => {
  connection.perform('player_ready', { ready_bool: readyBool })
}
// player readiness will be tracked on the backend soon
const readyPlayerCount = ref(0)
const totalPlayerCount = ref(1)

// moving to the next stage will also be controlled by the backend
const gameState = ref({})
const loadNextStage = (newGameState) => {
  return
  currentStage.value++
  // dummy data for testing, this will be filled in with data from the backend in the future
  switch (currentStage.value) {
    case 3:
      gameState.value = {
        chooser_id: 1,
        board: [
          { creator_id: 1, name: 'Chemistry', answered: [false, false, true] },
          { creator_id: 2, name: 'Biology', answered: [true, true, true] },
          { creator_id: 3, name: 'History', answered: [true, true, false] },
          { creator_id: 4, name: 'THE HISTORY OF WESTERN CHINA TEN THOUSAND YEARS AGO', answered: [false, false, false] },
        ]
      }
      break;
    case 4:
    case 6:
    case 8:
      gameState.value = { topic: 'Chemistry', user_id: 1, question: 'What element has an atomic number of 8?', answer: 'Oxygen' }
      break;
  }
}

</script>

<style scoped>

</style>