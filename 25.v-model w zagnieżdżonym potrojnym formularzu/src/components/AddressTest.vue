<script setup lang="ts">
import MailingAddress from './AddressForm.vue'

const props = defineProps<{
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
}>()
</script>

<template>
  <div>
    <mailing-address
      :address="props.address"
      @input="$emit('update:address', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>
