<template>
  <Card>
    <template #title>
      Write {{difficultyLevels[currentDifficultyLevel]}} question about TOPIC
    </template>
    <template #subtitle>
      They'll see the question, then be asked to type in the answer exactly
    </template>
    <template #content>
      <div id="question-form">
        <div class="question-field">
          <label>Your Question</label>
          <Textarea auto-resize/>
        </div>
        <div class="question-field">
          <label>The Answer</label>
          <InputText/>
        </div>
        <ReadyToggleButton @playerReady="$emit('playerReady')"
                           @playerUnready="$emit('playerUnready')"
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
import ReadyToggleButton from "@/components/Games/BaseComponents/ReadyToggleButton.vue";

const currentDifficultyLevel = ref(0)
const difficultyLevels = [
    'an easy',
    'a medium',
    'a hard'
]
</script>

<style scoped>
#question-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.question-field {
  display: flex;
  flex-direction: column;
}
</style>