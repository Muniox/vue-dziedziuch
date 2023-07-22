<script setup lang="ts">
import axios from 'axios'
import { Starship, type StarshipsResponse } from './types/Starship'
import StarShipItem from './StarShipItem.vue'
import { type Ref, ref } from 'vue'

const starships: Ref<null | Starship[]> = ref(null)
const response = await axios.get<StarshipsResponse>('https://swapi.dev/api/starships')

starships.value = response.data.results
</script>

<template>
  <section v-if="starships">
    <h1>Ships list:</h1>
    <StarShipItem v-for="(starship, index) in starships" :key="index" :ship="starship" />
  </section>
</template>

<style scoped lang="scss"></style>
