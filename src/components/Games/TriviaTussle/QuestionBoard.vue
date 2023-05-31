<template>
  <div id="question-board">
    <div v-for="topic in gameState.board"
         class="question-column"
    >
      <QuestionBoardCard :text="topic.name"
                         :is-title="true"
      />
      <QuestionBoardCard v-for="(answered, index) in topic.answered"
                         :text="answered ? null : (index + 1) * 100"
                         :answered="answered"
                         @questionChosen="questionChosen"
      />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import QuestionBoardCard from "@/components/Games/TriviaTussle/QuestionBoardCard.vue";

const instance = getCurrentInstance()

const { gameState } = defineProps(['gameState'])

const questionChosen = (questionData) => {
  instance.emit('playerInput', questionData)
}
</script>

<style scoped>
#question-board {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100vw;
}

.question-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>