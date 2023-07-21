<script setup lang="ts">
import type { Payload } from '../types/EmitPayload'

const emit = defineEmits<{
  'add-item-to-cart': [Payload]
}>()

function addItem() {
  // emit('add-item-to-cart');
  // emit('add-item-to-cart', 3);

  emit('add-item-to-cart', { name: 'product', qty: 2 })
}
</script>

<template>
  <button class="button" @click="addItem">Add to cart</button>
</template>

<style scoped></style>
../types/EmitPayload
