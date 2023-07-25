<script setup lang="ts">
import ItemsList from '@/components/ItemsList.vue'
import BaseLoader from '@/components/BaseLoader.vue'
import { onErrorCaptured, ref, type Ref } from 'vue'
import axios, { type AxiosError } from 'axios'

const error: Ref<AxiosError | null> = ref(null)

onErrorCaptured((e) => {
  if (axios.isAxiosError(e)) {
    error.value = e
    // alert(error.value?.message)
  }
})
</script>

<template>
  <section class="wrapper">
    <div v-if="error">{{ error.message }}</div>
    <Suspense v-else>
      <template #default>
        <ItemsList />
      </template>
      <template #fallback>
        <BaseLoader />
      </template>
    </Suspense>
  </section>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-height: 100vh;
}
</style>
