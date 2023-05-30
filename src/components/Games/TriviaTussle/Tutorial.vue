<template>
  <Card id="tutorial-card">
    <template #title>
      Welcome to Trivia Tussle!
    </template>
    <template #content>
      <div id="tutorial-content">
        <div id="tutorial-description">
          In this game you'll all be choosing your own topic
          then you'll write 3 questions for that topic!<br><br>
          After all the questions are written we'll choose questions
          then answer them like a trivia night!
        </div>
        <ReadyToggleButton @playerReady="$emit('playerReady')"
                           @playerUnready="$emit('playerUnready')"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
import ReadyToggleButton from "@/components/Games/BaseComponents/ReadyToggleButton.vue";
</script>

<style scoped>
#tutorial-card {
  padding: 0 10px;
}

#tutorial-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#tutorial-description {
  width: 400px;
}
</style>