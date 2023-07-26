<script setup lang="ts">
import type { Payload } from '../types/EmitPayload'

// const emit = defineEmits<{
//   'add-item-to-cart': [Payload]
// }>()

//jawna deklaracja jest nam niepotrzebna ponieważ korzystamy z TypeScript i on nam wszystko waliduje
const emit = defineEmits<{
  'add-item-to-cart': []
}>()

function addItem() {
  emit('add-item-to-cart')
  // emit('add-item-to-cart', 3);

  // emit('add-item-to-cart', { name: 'product', qty: 2 })
}
</script>

<template>
  <button class="button" @click="addItem">Add to cart</button>
</template>

<style scoped>
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
</style>
