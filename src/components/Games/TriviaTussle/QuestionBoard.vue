<template>
  <div id="question-board">
    <div v-for="topic in questionBoard"
         class="question-column"
    >
      <QuestionBoardCard :text="topic.name"
                         :is-title="true"
      />
      <QuestionBoardCard v-for="(answered, index) in topic.answered"
                         :text="answered ? null : (index + 1) * 100"
                         :answered="answered"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import QuestionBoardCard from "@/components/Games/TriviaTussle/QuestionBoardCard.vue";



// dummy data for testing
const questionBoard = ref([
  { creator: 'foo', name: 'Chemistry', answered: [false, false, true] },
  { creator: 'bar', name: 'Biology', answered: [true, true, true] },
  { creator: 'baz', name: 'History', answered: [true, true, false] },
  { creator: 'zop', name: 'THE HISTORY OF WESTERN CHINA TEN THOUSAND YEARS AGO', answered: [false, false, false] },
])
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