<script setup lang="ts">
import MailingAddress from './AddressForm.vue'

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
    <mailing-address
      :street="props.street"
      :city="props.city"
      :state="props.state"
      :zip="props.zip"
      @update-city="(value) => updateCity(value)"
      @update-state="(value) => updateState(value)"
      @update-zip="(value) => updateZip(value)"
      @update-street="(value) => updateStreet(value)"
    />
  </div>
</template>

<style scoped></style>
