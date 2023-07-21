<script setup lang="ts">
import BaseNotification from './BaseNotification.vue'
import AddToCartButton from './AddToCartButton.vue'
import { computed, ref } from 'vue'
import { type Payload } from '../types/EmitPayload'

const isNotificationVisible = ref(false)
const numberOfItems = ref(0)
const notificationText = computed(() => `Number of items in cart: ${numberOfItems.value}`)

function increaseTheNumberOfItems(payload: Payload) {
  // numberOfItems.value++;
  numberOfItems.value += payload.qty
  isNotificationVisible.value = true
}

function hideNotification() {
  isNotificationVisible.value = false
}
</script>

<template>
  <div class="container">
    <AddToCartButton @add-item-to-cart="increaseTheNumberOfItems" />
    <BaseNotification
      :isVisible="isNotificationVisible"
      :message="notificationText"
      @hide-notification="hideNotification"
    />
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.input {
  margin-top: 10px;
}
.outer {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b883;
  margin-top: 10px;
}
.inner {
  width: 50px;
  height: 50px;
  background-color: #35495e;
}
.form {
  display: flex;
  flex-direction: column;
}
</style>
../types/EmitPayload
