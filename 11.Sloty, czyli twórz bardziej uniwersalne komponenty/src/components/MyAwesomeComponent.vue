<script setup lang="ts">
import AwsomeButton from './AwsomeButton.vue'
// skrót dla v-slot to #
</script>

<template>
  <div class="container">
    <AwsomeButton :text="'test'">
      <template #title>
        <h1>World</h1>
      </template>
      <template v-slot:title2>
        <h1>World2</h1>
      </template>
      <p>Miłego dnia</p>
    </AwsomeButton>
    <!-- <AwsomeButton :text="'test'">
      <template #title>
        <h1>World</h1>
      </template>
      <template v-slot:title2>
        <h1>World2</h1>
      </template>
      <p>Miłego dnia</p>
    </AwsomeButton> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
