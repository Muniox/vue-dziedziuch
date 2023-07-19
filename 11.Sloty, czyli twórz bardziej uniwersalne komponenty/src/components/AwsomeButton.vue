<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
  }>(),
  {
    text: 'siemka'
  }
)
defineSlots<{
  title: any
  title2: any
  default: any //slot defaultowy, bez nazwy
}>()
</script>

<template>
  <button class="button">
    <slot>
      {{ props.text }}
      <slot name="title">
        <h2>Earth</h2>
      </slot>
      <slot name="title2"></slot>
    </slot>
  </button>
  <!-- <button class="button">
    {{ props.text }}
    <slot name="title">
      <h2>Earth</h2>
    </slot>
    <slot name="title2"></slot>
    <slot></slot>
  </button> -->
</template>

<style scoped lang="scss">
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
  transition: background-color 0.1s ease-in, color 0.1s ease-in, background-color 0.1s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
    background-color: #000;
  }
}
</style>
