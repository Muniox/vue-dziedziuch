<script setup lang="ts">
import { type Ref, ref } from 'vue'
import axios from 'axios'
import SingleItem from '@/components/SingleItem.vue'
import type { People, PeopleResponse } from '@/types/PeopleResponse'

const items: Ref<null | People[]> = ref(null)

const response = await axios.get<PeopleResponse>('https://swapi.dev/api/people')

items.value = response.data.results
</script>

<template>
  <section class="list">
    <div v-for="(item, index) in items" :key="index" class="list__item">
      <SingleItem :item="item" />
    </div>
  </section>
</template>

<style lang="scss">
.list {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;
  &__item {
    text-decoration: none;
    width: 100%;
  }
}
</style>
