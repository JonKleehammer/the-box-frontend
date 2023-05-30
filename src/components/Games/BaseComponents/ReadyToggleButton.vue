<template>
  <ToggleButton v-model="ready"
                on-label="I'm Ready"
                on-icon="pi pi-check"
                off-label="Not Ready"
                off-icon="pi pi-times"
                icon-pos="right"
  />
</template>

<script setup>
import { ref } from "vue";
import ToggleButton from "primevue/togglebutton";

const ready = ref(false)
</script>

<style scoped>

</style>