<script setup lang="ts">
import type { People } from '@/types/PeopleResponse'
import { type Ref, ref, toRefs } from 'vue'
import { usePeopleStore } from '@/stores/people-store'

const props = defineProps<{
  id: string
}>()

const people = usePeopleStore()
const item: Ref<People | null> = ref(null)
item.value = await people.items[Number(props.id) - 1]
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
  </div>
</template>

<style scoped></style>
