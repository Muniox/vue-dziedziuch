<script setup lang="ts">
import StarShipList from './StarShipsList.vue'
import AppLoader from './AppLoader.vue'
import { onErrorCaptured, ref } from 'vue'
import axios, { type AxiosError } from 'axios'

const error = ref<null | AxiosError>(null)

onErrorCaptured((e) => {
  if (axios.isAxiosError(e)) {
    error.value = e
  }
})
</script>

<template>
  <div class="container">
    <div v-if="error" class="error">
      {{ error.message }}
    </div>
    <Suspense v-else>
      <StarShipList />
      <template #fallback>
        <AppLoader />
      </template>
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

.error {
  color: #cd3727;
}
</style>
