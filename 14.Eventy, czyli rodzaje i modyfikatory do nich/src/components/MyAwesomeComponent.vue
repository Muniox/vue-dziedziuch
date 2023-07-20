<script setup lang="ts">
import { ref, type Ref } from 'vue'

const mouseEventArray: Ref<string[]> = ref([])

function handleMouseEvent(e: MouseEvent) {
  mouseEventArray.value = [...mouseEventArray.value, e.type]
}
</script>

<template>
  <div class="container">
    <button
      class="button"
      @click.once="handleMouseEvent"
      @dblclick.once="handleMouseEvent"
      @mousedown.once="handleMouseEvent"
      @mouseup.once="handleMouseEvent"
      @mousemove.once="handleMouseEvent"
      @mouseover.once="handleMouseEvent"
      @mouseleave.once="handleMouseEvent"
      @mousewheel.once="handleMouseEvent"
    >
      Button
    </button>
    <ul>
      <li v-for="(event, index) in mouseEventArray" :key="index">{{ event }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.input {
  margin-top: 10px;
}
.button {
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 3px solid #000;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in;
  margin-top: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
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
