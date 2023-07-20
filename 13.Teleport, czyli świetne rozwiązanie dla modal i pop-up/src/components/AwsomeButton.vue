<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
  }>(),
  {
    text: 'siema'
  }
)

const { text } = toRefs(props)
</script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped lang="scss">
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

  &:hover {
    background-color: #000;
    color: #fff;
    background-color: #000;
  }
}
</style>
