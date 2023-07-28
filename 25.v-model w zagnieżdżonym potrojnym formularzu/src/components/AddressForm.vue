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
  emit('update-street', value)
}

function updateCity(value: string) {
  emit('update-city', value)
}

function updateState(value: string) {
  emit('update-state', value)
}

function updateZip(value: string) {
  emit('update-zip', value)
}
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
      @input="updateCity(($event.target as HTMLInputElement).value)"
    />
    <input
      name="state"
      :value="props.state"
      @input="updateState(($event.target as HTMLInputElement).value)"
    />
    <input
      name="zip"
      :value="props.zip"
      @input="updateZip(($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
