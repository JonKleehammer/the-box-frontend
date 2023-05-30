<template>
  <Card>
    <template #title>
      Welcome to Trivia Tussle!
    </template>
    <template #content>
      <div id="tutorial-description">
        In this game you'll all be choosing your own topic
        and then write 3 questions for that topic!<br><br>
        After all the questions are written we'll choose questions
        and answer them like a trivia night!
      </div>
    </template>
    <template #footer>
      <div id="control-buttons">
        <ReadyToggleButton/>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
import ReadyToggleButton from "@/components/Games/BaseComponents/ReadyToggleButton.vue";
</script>

<style scoped>
#tutorial-description {
  width: 400px;
}

#control-buttons {
  display: flex;
  justify-content: right;
}
</style>