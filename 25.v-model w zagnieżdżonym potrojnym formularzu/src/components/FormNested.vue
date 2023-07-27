<script setup lang="ts">
import { type Ref, ref, toRefs } from 'vue'
import AddressTest from './AddressTest.vue'

interface Form {
  name: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
}

const form: Ref<Form> = ref({
  name: '',
  email: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  }
})

const { name, email, address } = toRefs(form.value)
</script>

<template>
  <form
    @submit.prevent="
      console.log(name, email, address.street, address.city, address.state, address.zip)
    "
  >
    <input name="name" v-model="name" />
    <input name="email" v-model="email" />
    <address-test
      v-model:street="address.street"
      @update-street="(payload) => (address.street = payload)"
      v-model:city="address.city"
      @update-city="(payload) => (address.city = payload)"
      v-model:state="address.state"
      @update-state="(payload) => (address.state = payload)"
      v-model:zip="address.zip"
      @update-zip="(payload) => (address.zip = payload)"
    />
    <button type="submit">OK</button>
  </form>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button {
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 3px solid #000;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in;
  margin-top: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
}
.result {
  margin-top: 100px;
}
</style>
