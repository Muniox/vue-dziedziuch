<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  max: number
  value: number | null
}>()

const { max, value } = toRefs(props)
</script>

<template>
  <div>
    Opinion pool:
    <progress v-if="value" :max="max" :value="value"></progress>
    {{ value ? `${value}%` : 'no data' }}
  </div>
</template>

<style scoped></style>
