<template>
<Card>
  <template #title>
    Choose Your Topic!
  </template>
  <template #subtitle>
    You'll need to write 3 questions of increasing difficulty for your topic
  </template>
  <template #content>
    <div class="p-inputgroup flex-1">
      <InputText placeholder="Your topic here"/>
      <ReadyToggleButton @playerReady="$emit('playerReady')"
                         @playerUnready="$emit('playerUnready')"
      />
    </div>
  </template>
</Card>
</template>

<script setup>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import ReadyToggleButton from "@/components/Games/BaseComponents/ReadyToggleButton.vue";
</script>

<style scoped>

</style>