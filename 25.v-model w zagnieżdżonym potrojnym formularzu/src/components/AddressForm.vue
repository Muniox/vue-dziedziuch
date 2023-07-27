<script setup lang="ts">
const props = defineProps<{
  street: string
  city: string
  state: string
  zip: string
}>()
</script>

<template>
  <div>
    <input
      name="street"
      :value="props.street"
      @input="$parent?.$emit('update-street', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="city"
      :value="props.city"
      @input="$parent?.$emit('update-city', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="state"
      :value="props.state"
      @input="$parent?.$emit('update-state', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="zip"
      :value="props.zip"
      @input="$parent?.$emit('update-zip', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
