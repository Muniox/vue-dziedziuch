<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import type { PresidentCandidate } from '@/types/CandidateItem'
import ItemsList from '@/components/items/ItemsList.vue'

const candidates: Ref<PresidentCandidate[]> = ref([
  {
    id: 1,
    firstName: 'Robert',
    lastName: 'Biedroń',
    age: 44,
    party: 'Wiosna Roberta Biedronia',
    opinionPool: 4
  },
  {
    id: 2,
    firstName: 'Krzysztof',
    lastName: 'Bosak',
    age: 37,
    party: 'Konfederacja Wolność i Niepodległość',
    opinionPool: 7
  },
  {
    id: 3,
    firstName: 'Andrzej',
    lastName: 'Duda',
    age: 47,
    party: null,
    opinionPool: 49
  },
  {
    id: 4,
    firstName: 'Szymon',
    lastName: 'Hołownia',
    age: 43,
    party: null,
    opinionPool: 22
  },
  {
    id: 5,
    firstName: 'Marek',
    lastName: 'Jakubiak',
    age: 61,
    party: 'Federacja dla Rzeczypospolitej',
    opinionPool: null
  },
  {
    id: 6,
    firstName: 'Małgorzata',
    lastName: 'Kidawa-Błońska',
    age: 63,
    party: 'Platforma Obywatelska',
    opinionPool: 5
  },
  {
    id: 7,
    firstName: 'Władysław',
    lastName: 'Kosiniak-Kamysz',
    age: 38,
    party: 'Polskie Stronnictwo Ludowe',
    opinionPool: 12
  },
  {
    id: 8,
    firstName: 'Mirosław',
    lastName: 'Piotrowski',
    age: 64,
    party: 'Ruch Prawdziwa Europa',
    opinionPool: null
  },
  {
    id: 9,
    firstName: 'Paweł',
    lastName: 'Tanajno',
    age: 44,
    party: null,
    opinionPool: 1
  },
  {
    id: 10,
    firstName: 'Stanisław',
    lastName: 'Żółtek',
    age: 64,
    party: 'Kongres Nowej Prawicy',
    opinionPool: null
  }
])

const searchAttribute: Ref<string> = ref('')

const filterByAll = computed(() => {
  if (searchAttribute.value === '') {
    return candidates.value
  }

  return candidates.value.filter((item) => {
    for (const [key, value] of Object.entries(item)) {
      if (key !== 'id') {
        if (value?.toString().toLowerCase().startsWith(searchAttribute.value.toLowerCase())) {
          return item
        }
      }
    }
  })
})
</script>

<template>
  <div class="search">
    <label for="search"
      >Search by All:
      <input type="text" id="search" v-model="searchAttribute" />
    </label>
  </div>
  <ItemsList :candidates="filterByAll" />
</template>

<style scoped lang="scss">
.search {
  max-width: 1200px;
  margin: 20px auto;
}
</style>
