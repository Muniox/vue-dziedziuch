<script setup lang="ts">
import StarShipList from './StarShipList.vue'
</script>

<template>
  <div class="container">
    <Suspense>
      <StarShipList />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fcd711;
}
</style>
