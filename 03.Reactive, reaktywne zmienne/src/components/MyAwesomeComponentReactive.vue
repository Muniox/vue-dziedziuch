<script setup lang="ts">
import { reactive } from 'vue'

interface StateInformation {
  quantity: number
  price: number
  totalPrice: number
  tax: number
}

const state: StateInformation = reactive({
  quantity: 0,
  price: 100,
  totalPrice: 0,
  tax: 0
})

function makeOrder() {
  state.quantity++
  state.totalPrice = state.quantity * state.price
  state.tax = state.totalPrice * 0.23
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
