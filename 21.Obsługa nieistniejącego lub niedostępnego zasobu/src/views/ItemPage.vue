<script setup lang="ts">
import { toRefs } from 'vue'
import ItemsDetails from '@/components/ItemDetails.vue'
import BaseLoader from '@/components/BaseLoader.vue'

const props = defineProps<{
  id: string
}>()

const { id } = toRefs(props)
</script>

<template>
  <section class="wrapper">
    <Suspense>
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
