<template>
  <BlockUI :blocked="answered">
    <div :class="['question-board-card', {'clickable': !isTitle}]"
         v-tooltip.top="isTitle ? text : null"
    >
      {{ text }}
    </div>
  </BlockUI>
</template>

<script setup>
import BlockUI from "primevue/blockui";

const { text, answered, isTitle } = defineProps(['text', 'answered', 'isTitle'])
</script>

<style scoped>
.question-board-card {
  width: 150px;
  height: 90px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #282936;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>