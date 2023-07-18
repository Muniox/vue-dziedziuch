<script setup lang="ts">
import type { PresidentCandidate } from '@/types/CandidateItem'
import { computed, toRefs } from 'vue'
import ProgressBar from '@/components/items/item/ProgressBar.vue'

//defineProps() compiler hint fails if wrapped in another function call i.e. toRefs(), don't do it!!!
const props = defineProps<{
  candidate: PresidentCandidate
  indexNumber: number
}>()

const { candidate, indexNumber } = toRefs(props)
const ageWithYears = computed(() => `${candidate.value.age} years`)
</script>

<template>
  <div class="single-item">
    <p>Candidate: {{ indexNumber + 1 }}</p>
    <p>Name: {{ candidate.firstName }} {{ candidate.lastName }}</p>
    <p>Age: {{ ageWithYears }}</p>
    <p v-if="candidate.party">Party: {{ candidate.party }}</p>
    <ProgressBar :max="100" :value="candidate.opinionPool" />
  </div>
</template>

<style scoped lang="scss">
.single-item {
  border: 2px solid black;
  padding: 10px;
}
</style>
