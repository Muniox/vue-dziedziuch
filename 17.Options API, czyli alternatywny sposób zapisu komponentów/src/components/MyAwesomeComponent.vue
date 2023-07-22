<script setup lang="ts">
import CompositionAPI from './CompositionAPI.vue'
import OptionsAPI from './OptionsAPI.vue'
</script>

<template>
  <div class="container">
    <h1 class="header">Api comparison</h1>
    <div class="components">
      <CompositionAPI component-name="Composition component" />
      <OptionsAPI component-name="Options component" />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  margin: 20px;
}
.header {
  margin-bottom: 20px;
}
</style>
