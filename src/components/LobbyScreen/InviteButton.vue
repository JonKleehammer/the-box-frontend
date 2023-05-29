<template>
  <Button label="Invite"
          icon="pi pi-link"
          iconPos="right"
          @click="copyInviteLink"
  />
</template>

<script setup>
import Button from "primevue/button";

// note, copying the invite link via navigator.clipboard may not be supported by older browsers
// the standard way is to manipulate the DOM which I wanted to try out alternatives since that feels silly
const copyInviteLink = () => {
  const link = window.location.href
  navigator.clipboard.writeText(link)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });
}
</script>

<style scoped>

</style>