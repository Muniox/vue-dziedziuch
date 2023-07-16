<script setup lang="ts">
import { ref } from 'vue'

const pension = ref(100)

function incrementPension() {
  pension.value++
}
</script>

<template>
  <div>
    <button @click="incrementPension">Increment my pension</button>
    <p>Your pension will be: {{ pension }}</p>
  </div>
</template>

<style scoped></style>
