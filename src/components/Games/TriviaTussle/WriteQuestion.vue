<template>
  <Card id="question-form-card">
    <template #title>
      Write
      {{getIndefiniteArticle(difficultyLevels[difficultyIndex].description)}}
      <span :style="`color: ${difficultyLevels[difficultyIndex].color}`">{{difficultyLevels[difficultyIndex].description}}</span>
      difficulty question about<br>
      TOPIC
    </template>
    <template #subtitle>
      They'll see the question, then be asked to type in the answer exactly
    </template>
    <template #content>
      <div id="question-form">
        <Button icon="pi pi-angle-left"
                :disabled="difficultyIndex <= 0"
                v-tooltip.left="'Previous Question'"
                @click="changeDifficultyLevel(-1)"
        />
        <div id="question-fields">
          <div class="question-field">
            <label>Your Question</label>
            <Textarea v-model="userQuestions[difficultyIndex].question" auto-resize/>
          </div>
          <div class="question-field">
            <label>The Answer</label>
            <InputText v-model="userQuestions[difficultyIndex].answer"/>
          </div>
          <ReadyToggleButton @playerReady="$emit('playerReady')"
                             @playerUnready="$emit('playerUnready')"
          />
        </div>
        <Button icon="pi pi-angle-right"
                :disabled="difficultyIndex >= difficultyLevels.length - 1"
                v-tooltip.right="'Next Question'"
                @click="changeDifficultyLevel(1)"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from 'primevue/button'
import ReadyToggleButton from "@/components/Games/BaseComponents/ReadyToggleButton.vue";

const difficultyIndex = ref(0)
const difficultyLevels = [
  { description: 'easy',   color: 'cyan' },
  { description: 'medium',  color: 'yellow' },
  { description: 'hard',    color: 'red' },
]
const getIndefiniteArticle = (word) => {
  if (word.match(/^[aeiou]/))
    return 'an'
  else
    return 'a'
}

const userDataTemplate = {}
for (let i = 0; i <= difficultyLevels.length; i++)
  userDataTemplate[i] = { question: '', answer: ''}
const userQuestions = ref(userDataTemplate)

const changeDifficultyLevel = (increment) => {
  difficultyIndex.value += increment
}
</script>

<style scoped>
#question-form-card {
  width: 550px;
}

#question-form-card :deep(.p-card-title), #question-form-card :deep(.p-card-subtitle) {
  text-align: center;
}

#question-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

#question-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 1 0 auto;
}

.question-field {
  display: flex;
  flex-direction: column;
}
</style>