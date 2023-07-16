<script setup lang="ts">
import { computed, ref, type Ref, toRefs, watch } from 'vue'

const masks = ref<number>(5)

function buyMasks() {
  masks.value > 0 ? masks.value-- : masks.value
}
</script>

<template>
  <div>
    <h2>v-if, v-else-if, v-else</h2>
    <p>Masks: {{ masks }}</p>
    <p v-if="masks > 2">You can buy a mask!</p>
    <p v-else-if="masks <= 2 && masks > 0">
      You can buy a mask, but hurry up it's almost out of stock!
    </p>
    <p v-else>You can't buy a mask, it's out of stock!</p>
  </div>
  <div>
    <h2>v-show (only for toggle that will be used many times)</h2>
    <p>Masks: {{ masks }}</p>
    <p v-show="masks > 2">You can buy a mask!</p>
    <p v-show="masks <= 2 && masks > 0">
      You can buy a mask, but hurry up it's almost out of stock!
    </p>
    <p v-show="!masks">You can't buy a mask, it's out of stock!</p>
  </div>
  <button @click="buyMasks" :disabled="!masks">Buy a mask</button>
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

button:disabled:active {
  background-color: revert;
}
</style>
