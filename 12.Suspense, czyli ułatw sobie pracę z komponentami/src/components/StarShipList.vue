<script setup lang="ts">
import axios from 'axios'
import { type StarshipsResponse } from './types/Starship'

const response = await axios.get<StarshipsResponse>('https://swapi.dev/api/starships/')
</script>

<template>
  <section>
    <h1>Ships list:</h1>
    <div v-for="(starship, index) in response.data.results" :key="index">
      <p>{{ starship.name }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
