<script setup lang="ts">
import axios, { type AxiosError } from 'axios'
import { onErrorCaptured, ref, toRefs, type Ref } from 'vue'
import ItemsDetails from '@/components/ItemDetails.vue'
import BaseLoader from '@/components/BaseLoader.vue'

const props = defineProps<{
  id: string
}>()

const { id } = toRefs(props)
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
        <ItemsDetails :id="id" />
      </template>
      <template #fallback>
        <BaseLoader />
      </template>
    </Suspense>
  </section>
</template>

<style scoped lang="scss"></style>
