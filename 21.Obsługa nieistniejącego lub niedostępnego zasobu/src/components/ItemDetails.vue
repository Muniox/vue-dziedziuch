<script setup lang="ts">
import type { People } from '@/types/PeopleResponse'
import { type Ref, ref } from 'vue'
import { usePeopleStore } from '@/stores/people-store'

const props = defineProps<{
  id: string
}>()

const people = usePeopleStore()
await people.getPeople()
const item: Ref<People | null> = ref(null)
item.value = people.items[Number(props.id) - 1]
console.log(people.items)
</script>

<template>
  <div>
    <section v-if="item">
      <h2>Basic information:</h2>
      <p>Name: {{ item.name }}</p>
      <p>Birth: {{ item.birth_year }}</p>
      <p>height: {{ item.height }}</p>
      <p>Mass: {{ item.mass }}</p>
    </section>
    <section v-else>
      <h2>OOOPS!</h2>
      <p>
        For some reason the resource are looking for not exist or in unavailable, try something
        else.
      </p>
    </section>
  </div>
</template>

<style scoped></style>
