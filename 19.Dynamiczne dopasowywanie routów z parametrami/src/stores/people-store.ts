import type { People, PeopleResponse } from '@/types/PeopleResponse'
import axios from 'axios'
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const usePeopleStore = defineStore('people', () => {
  const items: Ref<[] | People[]> = ref([])

  async function getPeople() {
    const response = await axios.get<PeopleResponse>('https://swapi.dev/api/people')
    items.value = response.data.results
    return items
  }

  async function getPerson(id: string) {
    const persons = await getPeople()
    return persons.value[Number(id) - 1]
  }

  return { items, getPeople, getPerson }
})
