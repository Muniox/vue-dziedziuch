<script setup lang="ts">
import BaseInput from './BaseInput.vue'
import { ref } from 'vue'

const text = ref('')
function revertText() {
  return (text.value = text.value.split('').reverse().join(''))
}

function matchText(payload: string) {
  return (text.value = payload)
}
</script>

<template>
  <div class="container">
    <BaseInput
      name="input"
      first-name=""
      last-name=""
      @update="matchText"
      v-model="text"
      :text="text"
    />
    <p class="result">{{ text }}</p>
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
