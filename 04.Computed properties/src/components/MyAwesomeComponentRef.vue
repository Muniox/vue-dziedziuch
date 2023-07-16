<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'

interface StateInformation {
  quantity: number
  price: number
  totalPrice: number
  tax: number
}

const state: Ref<StateInformation> = ref({
  quantity: 0,
  price: 100,
  totalPrice: computed<number>(() => state.value.quantity * state.value.price),
  tax: computed<number>(() => state.value.totalPrice * 0.23)
})

function makeOrder() {
  state.value.quantity++
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
