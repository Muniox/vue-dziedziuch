<script setup lang="ts">
import SingleItem from '@/components/SingleItem.vue'
import { usePeopleStore } from '@/stores/people-store'

const people = await usePeopleStore()
await people.getPeople()
</script>

<template>
  <section class="list">
    <router-link
      :to="{ name: 'ItemPage', params: { id: index + 1 } }"
      v-for="(item, index) in people.items"
      :key="index"
      class="list__item"
    >
      <SingleItem :item="item" />
    </router-link>
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
