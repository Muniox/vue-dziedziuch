<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'

interface PresidentCandidates {
  id: number
  firstName: string
  lastName: string
  age: number
  party: null | string
  opinionPool: null | number
}

const candidates: Ref<PresidentCandidates[]> = ref([
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
    //trochę łatwiejsze, ale nadal trudne
    //mała poprawka, żeby wykluczyć id
    for (const [key, value] of Object.entries(item)) {
      if (key !== 'id') {
        if (value?.toString().toLowerCase().startsWith(searchAttribute.value.toLowerCase())) {
          return item
        }
      }
    }
    //to było dosyć trudne
    // for (const property in item) {
    //   if (property !== 'id') {
    //     if (item[property as keyof typeof item]?.toString().startsWith(searchAttribute.value.toLowerCase())) {
    //       return item
    //     }
    //   }
    // }
    //
    //Proste rozwiązanie:
    // return (
    //   item.firstName.startsWith(searchAttribute.value) ||
    //   item.lastName.startsWith(searchAttribute.value) ||
    //   item.age.toString().startsWith(searchAttribute.value) ||
    //   item.party?.startsWith(searchAttribute.value) ||
    //   item.opinionPool?.toString().startsWith(searchAttribute.value)
    // )
  })
})
</script>

<template>
  <div class="candidates">
    <div 
      v-for="(candidate, index) in filterByAll" 
      :key="candidate.id" 
      class="candidates__card"
    >
      <p>Candidate: {{ index + 1 }}</p>
      <p>Name: {{ candidate.firstName }} {{ candidate.lastName }}</p>
      <p>Age: {{ candidate.age }}</p>
      <p v-if="candidate.party">Party: {{ candidate.party }}</p>
      <div>
        Opinion pool: <progress v-if="candidate.opinionPool" max="100" :value="candidate.opinionPool"></progress> 
        {{ candidate.opinionPool ? `${candidate.opinionPool}%` : 'no data' }}
      </div>
    </div>
  </div>
  <div>
    <label for="search"
      >Search by All:
      <input type="text" id="search" v-model="searchAttribute" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.candidates {
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 20px auto;

  &__card {
    border: 1px solid black;
    padding: 10px;
  }
}

</style>
