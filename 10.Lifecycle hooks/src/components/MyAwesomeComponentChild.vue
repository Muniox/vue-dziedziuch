<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'

const width = ref(0)
const height = ref(0)
function changeWindowSize() {
  width.value = window.innerWidth
  height.value = window.innerHeight
}

console.log('child setup')

onBeforeMount(() => console.log('child onBeforeMount')) // przed załadowaniem template
onMounted(() => {
  console.log('child onMounted')
  window.addEventListener('resize', changeWindowSize)
}) // po załadowaniu template
onBeforeUpdate(() => console.log('child onBeforeUpdate')) //kiedy count został zmieniony ale przed rerenderem w template
onUpdated(() => console.log('child onUpdated')) //po wyrenderowaniu w template
onBeforeUnmount(() => {
  removeEventListener('resize', changeWindowSize)
  console.log('child onBeforeUnmount')
}) //wykonuje sie zanim instancja vue zostanie zniszczona
onUnmounted(() => {
  console.log('child onUnmounted')
}) //wykonuje sie po tym jak instancja zostanie zniszczona
</script>

<template>
  <div>
    <p>Hi, I'm Child component</p>
    <p>Window size: Width: {{ width }}, Height: {{ height }}</p>
  </div>
</template>

<style scoped></style>
