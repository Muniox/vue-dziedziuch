<script setup lang="ts">
import { computed, ref, type Ref, toRefs, watch } from 'vue'

interface Shares {
  sharesQuantity: number
  sharesPrice: number
  sharesValue: number
}

const shares: Ref<Shares> = ref({
  sharesQuantity: 15,
  sharesPrice: 20,
  sharesValue: computed(() => shares.value.sharesQuantity * shares.value.sharesPrice)
})

const { sharesPrice, sharesValue, sharesQuantity } = toRefs(shares.value)

function changeSharesQuantity(addQuantity: number): void {
  if (sharesQuantity.value > 0) {
    sharesQuantity.value += addQuantity
  }
}

function getPrice(min: number, max: number): void {
  const priceDiff = Math.floor(Math.random() * (max - min) + min)
  if (shares.value.sharesPrice + priceDiff >= 0) {
    sharesPrice.value += priceDiff
  }
}

watch(sharesQuantity, (NewSharesQuantity, prevSharesQuantity) => {
  NewSharesQuantity > prevSharesQuantity ? getPrice(1, 5) : getPrice(-5, -1)
})
</script>

<template>
  <div>
    You have
    <strong>{{ sharesQuantity }}</strong> shares and their value is
    <strong>{{ sharesValue }} $</strong>, because share price is
    <strong>{{ sharesPrice }} $</strong>
  </div>
  <button @click="changeSharesQuantity(1)">Buy one share</button>
  <button @click="changeSharesQuantity(5)">Buy five shares</button>
  <button @click="changeSharesQuantity(-1)">Sell one share</button>
  <button @click="changeSharesQuantity(-5)">Sell five shares</button>
</template>

<style scoped>
button {
  border: 1px;
  border-radius: 15px;
  padding: 5px;
  width: 120px;
  margin: 5px 0 5px 0;
  display: block;
  cursor: pointer;
}

button:active {
  background-color: cornsilk;
}
</style>
