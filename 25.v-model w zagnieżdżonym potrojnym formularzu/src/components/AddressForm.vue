<script setup lang="ts">
const props = defineProps<{
  street: string
  city: string
  state: string
  zip: string
}>()

const emit = defineEmits<{
  'update-street': [street: string]
  'update-city': [city: string]
  'update-state': [state: string]
  'update-zip': [zip: string]
}>()

function updateStreet(value: string) {
  emit('update-city', value)
}
// ($event.target as HTMLInputElement).value)
</script>

<template>
  <div>
    <input
      name="street"
      :value="props.street"
      @input="updateStreet(($event.target as HTMLInputElement).value)"
    />
    <input
      name="city"
      :value="props.city"
      @input="$emit('update-city', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="state"
      :value="props.state"
      @input="$emit('update-state', ($event.target as HTMLInputElement).value)"
    />
    <input
      name="zip"
      :value="props.zip"
      @input="$emit('update-zip', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
