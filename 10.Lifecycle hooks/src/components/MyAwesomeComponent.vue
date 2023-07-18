<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  onRenderTriggered,
  onRenderTracked
} from 'vue'
import MyAwesomeComponentCild from './MyAwesomeComponentChild.vue'

const count = ref(0)

function increment() {
  count.value++
}

console.log('setup')

onBeforeMount(() => console.log('onBeforeMount')) // przed załadowaniem template
onMounted(() => console.log('onMounted')) // po załadowaniu template
onBeforeUpdate(() => console.log('onBeforeUpdate')) //kiedy count został zmieniony ale przed rerenderem w template
onUpdated(() => console.log('onUpdated')) //po wyrenderowaniu w template
onBeforeUnmount(() => console.log('onBeforeUnmount')) //wykonuje sie zanim instancja vue zostanie zniszczona
onUnmounted(() => console.log('onUnmounted')) //wykonuje sie po tym jak instancja zostanie zniszczona

//onActivated
//onDeactivated

//onErrorCaptured wykonywany kiedy występuje bład komponentu dziecka

onRenderTracked((e) => {
  console.log('onRenderTracked', e)
}) // do debugowania

onRenderTriggered((e) => {
  console.log('onRenderTriggered', e)
}) // do debugowania
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">increment</button>
    <MyAwesomeComponentCild v-if="count < 3" />
  </div>
</template>

<style scoped lang="scss"></style>
