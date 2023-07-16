<script setup lang="ts">
import { computed, reactive } from 'vue'

interface StateInformation {
  quantity: number
  price: number
  totalPrice: number
  tax: number
}

const state: StateInformation = reactive({
  quantity: 0,
  price: 100,
  totalPrice: computed<number>(() => state.quantity * state.price),
  tax: computed<number>(() => state.totalPrice * 0.23)
})

function makeOrder() {
  state.quantity++
}
</script>

<template>
  <div>
    <button @click="makeOrder">Make next order</button>
    <p>Quantity: {{ state.quantity }}</p>
    <p>Order total price: {{ state.totalPrice }}</p>
    <p>Tax: {{ state.tax }}</p>
  </div>
</template>

<style scoped></style>
