<script setup lang="ts">
import { ref, type Ref } from 'vue'

const mouseEventArray: Ref<string[]> = ref([])
const keyEventArray: Ref<{ key: string; type: string }[]> = ref([])
const isMessageSend: Ref<boolean> = ref(false)

function handleMouseEvent(e: MouseEvent) {
  mouseEventArray.value = [...mouseEventArray.value, e.type]
}

function handleKeyEvent({ key, type }: KeyboardEvent) {
  keyEventArray.value = [...keyEventArray.value, { key, type }]
}

function sendMessage() {
  isMessageSend.value = true
}

// warto zapoznać się ze stroną keycode.info
</script>

<template>
  <div class="container">
    <button
      class="button"
      @click.once="handleMouseEvent"
      @dblclick.once="handleMouseEvent"
      @mousedown.left="handleMouseEvent"
      @mouseup.middle="handleMouseEvent"
      @mousemove.once="handleMouseEvent"
      @mouseover.once="handleMouseEvent"
      @mouseleave.once="handleMouseEvent"
      @mousewheel.once="handleMouseEvent"
      @mouseout.once="handleMouseEvent"
      @contextmenu.prevent="handleMouseEvent"
    >
      Button
    </button>
    <div class="outer" @click="handleMouseEvent">
      <div class="inner" @click.stop="handleMouseEvent"></div>
    </div>
    <ul>
      <li v-for="(event, index) in mouseEventArray" :key="index">{{ event }}</li>
    </ul>
    <form class="form" @submit.prevent="sendMessage">
      <input
        type="text"
        placeholder="Type something"
        class="input"
        @keypress.space="handleKeyEvent"
        @keydown.shift.s.exact="handleKeyEvent"
        @keyup.a="handleKeyEvent"
      />
      <button class="button">Submit</button>
    </form>
    <p v-show="isMessageSend">Message send</p>
    <ul>
      <li v-for="({ key, type }, index) in keyEventArray" :key="index">
        przycisk: {{ key }} typ: {{ type }}
      </li>
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
