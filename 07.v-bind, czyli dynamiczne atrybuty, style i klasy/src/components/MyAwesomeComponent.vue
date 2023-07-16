<script setup lang="ts">
import { computed, ref, type Ref, toRefs, watch } from 'vue'

const masks = ref<number>(5)

function buyMasks() {
  masks.value > 0 ? masks.value-- : masks.value
}

const images = ref([
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  'https://vuejs.org/images/logo.png'
])

let currentImage = ref(0)

function changeImg() {
  currentImage.value == 0 ? (currentImage.value = 1) : (currentImage.value = 0)
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
  <button @click="buyMasks" :disabled="!masks" :class="[{ btn: masks }, 'pill']">Buy a mask</button>
  <div>
    <img :src="images[currentImage]" alt="" class="image" />
    <button class="btn" @click="changeImg">Change Image</button>
  </div>
</template>

<style scoped lang="scss">
.image {
  width: 50px;
  height: 50px;
}
.btn {
  border: 1px;
  border-radius: 15px;
  padding: 5px;
  width: 120px;
  margin: 5px 0 5px 0;
  display: block;
  cursor: pointer;

  &:active {
    background-color: cornsilk;
  }
}
.pill {
  border-radius: 15px;
}
</style>
