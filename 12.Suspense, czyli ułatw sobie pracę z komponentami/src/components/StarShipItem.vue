<script setup lang="ts">
import { type Starship } from './types/Starship'
import { toRefs } from 'vue'

const props = defineProps<{
  ship: Starship
}>()

const { ship } = toRefs(props)
</script>

<template>
  <p class="ship">
    {{ ship.name }}
  </p>
</template>

<style scoped lang="scss"></style>
