<script setup lang="ts">
import MailingAddress from './AddressForm.vue'

const props = defineProps<{
  street: string
  city: string
  state: string
  zip: string
}>()
</script>

<template>
  <div>
    <mailing-address
      :street="props.street"
      :city="props.city"
      :state="props.state"
      :zip="props.zip"
    />
  </div>
</template>

<style scoped></style>
