<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
}>()

const { address } = toRefs(props)
const { zip, state, city, street } = toRefs(address.value)
</script>

<template>
  <div>
    <input
      name="street"
      :value="street"
      @input="$emit('update:street', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="city"
      :value="city"
      @input="$emit('update:city', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="state"
      :value="state"
      @input="$emit('update:state', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="zip"
      :value="zip"
      @input="$emit('update:zip', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
