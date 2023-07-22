<script setup lang="ts">
import { ref, computed, onMounted, watch, reactive, toRefs } from 'vue'

const props = defineProps<{
  componentName: string
}>()

const { componentName } = toRefs(props)

console.log('Hi, I am created from Composition API')

onMounted(() => console.log('Hi, I am mounted from Composition API'))

const state = reactive({
  secondValueToIncrement: 100,
  secondValueToDecrement: 110
})

//Increment
const valueToIncrement = ref(0)
function increment() {
  valueToIncrement.value++
  state.secondValueToIncrement++
}
watch(valueToIncrement, () => {
  console.log(`Composition API. Now value is ${valueToIncrement.value}`)
})

//Decrement
const valueToDecrement = ref(10)
function decrement() {
  valueToDecrement.value--
  state.secondValueToDecrement--
}

//Randomize color
function randomizeColor() {
  return Math.floor(Math.random() * 255)
}
const activeColor = computed(
  () => `rgb(${randomizeColor()},${randomizeColor()},${randomizeColor()})`
)
</script>

<template>
  <div>
    <h2>{{ componentName }}</h2>
    <div>
      First value:
      {{ valueToIncrement }}
      Second value:
      {{ state.secondValueToIncrement }}
      <button @click="increment">Increment</button>
    </div>
    <div>
      First value:
      {{ valueToDecrement }}
      Second value:
      {{ state.secondValueToDecrement }}
      <button @click="decrement">Decrement</button>
    </div>
    <div class="box" :style="{ backgroundColor: activeColor }"></div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 150px;
  height: 150px;
}
</style>
