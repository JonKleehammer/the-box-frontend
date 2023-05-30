<template>
  <ToggleButton v-model="ready"
                on-label="I'm Ready"
                on-icon="pi pi-check"
                off-label="Not Ready"
                off-icon="pi pi-times"
                icon-pos="right"
                @change="emitReadyEvent"
  />
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import ToggleButton from "primevue/togglebutton";

const instance = getCurrentInstance();

const ready = ref(false)

const emitReadyEvent = () => {
  console.log(this)
  if (ready.value)
    instance.emit('playerReady')
  else
    instance.emit('playerUnready')
}
</script>

<style scoped>

</style>