<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    value: {
      street: string
      city: string
      state: string
      zip: string
    }
  }>(),
  {
    value: () => ({
      street: '',
      city: '',
      state: '',
      zip: ''
    })
  }
)

const emit = defineEmits<{
  input: [
    value: {
      street: string
      city: string
      state: string
      zip: string
    }
  ]
}>()

watch(props.value, () => {
  emit('input', props.value)
})

const newValue = ref(props.value)
</script>

<template>
  <div>
    <input name="street" v-model="newValue.street" />
    <input name="city" v-model="newValue.city" />
    <input name="state" v-model="newValue.state" />
    <input name="zip" v-model="newValue.zip" />
  </div>
</template>

<style scoped lang="scss"></style>
