import type { People, PeopleResponse } from '@/types/PeopleResponse'
import axios from 'axios'
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const usePeopleStore = defineStore('people', () => {
  const items: Ref<null | People[]> = ref(null)

  async function getPeople(): Promise<Ref<People[] | null>> {
    const response = await axios.get<PeopleResponse>('https://swapi.dev/api/people')
    items.value = response.data.results
    return items
  }

  return { getPeople }
})
