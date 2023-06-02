<template>
<Card>
  <template #subtitle>
    {{ gameState.topic }} for 100 points! PLAYER Asks...
  </template>
  <template #content>
    {{ gameState.question }}
  </template>
  <template #footer>
    <div class="p-inputgroup flex-1">
      <InputText/>
      <Button label="submit"/>
    </div>
  </template>
</Card>
</template>

<script setup>
import Card from 'primevue/card'
import InputText from "primevue/inputtext";
import Button from 'primevue/button'

const { gameState } = defineProps(['gameState'])
</script>

<style scoped>

</style>