<script setup lang="ts">
import BaseInput from './BaseInput3.vue'
import { ref } from 'vue'

const text = ref('')
const firstName = ref('')
const lastName = ref('')
function revertText() {
  firstName.value = firstName.value.split('').reverse().join('')
  lastName.value = lastName.value.split('').reverse().join('')
}

// v-model to przesłany props pod postacią modelValue
</script>

<template>
  <div class="container">
    <BaseInput name="input" v-model:last-name="lastName" v-model:first-name="firstName" />
    <p class="result">{{ firstName }}</p>
    <p class="result">{{ lastName }}</p>
    <button class="button" @click="revertText">Revert text</button>
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button {
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 3px solid #000;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in;
  margin-top: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
}
.result {
  margin-top: 100px;
}
</style>
