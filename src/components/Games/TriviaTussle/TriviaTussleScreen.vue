<template>
  <component :is="gameStageComponents[0]"/>
</template>

<script setup>
import Tutorial from "@/components/Games/TriviaTussle/Tutorial.vue";

const gameStageComponents = [
    Tutorial
]
</script>

<style scoped>

</style>