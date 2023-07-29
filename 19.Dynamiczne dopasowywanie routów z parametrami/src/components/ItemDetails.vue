<script setup lang="ts">
import type { People } from '@/types/PeopleResponse'
import { type Ref, ref, toRefs } from 'vue'
import { usePeopleStore } from '@/stores/people-store'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  id: string
}>()

//storeToRefs aby zrobic destrukturyzacje store

const store = usePeopleStore()
const { getPerson } = store

const person = await getPerson(props.id)
</script>

<template>
  <div>
    <section v-if="person">
      <h2>Basic information:</h2>
      <p>Name: {{ person.name }}</p>
      <p>Birth: {{ person.birth_year }}</p>
      <p>height: {{ person.height }}</p>
      <p>Mass: {{ person.mass }}</p>
    </section>
  </div>
</template>

<style scoped></style>
