<script setup lang="ts">
import type { PresidentCandidate } from '@/types/CandidateItem'
import SingleItem from '@/components/items/item/SingleItem.vue'

const props = withDefaults(
  defineProps<{
    candidates: PresidentCandidate[]
  }>(),
  {
    candidates: () => [
      {
        id: 1,
        firstName: 'Tomek',
        lastName: 'Domek',
        age: 32,
        party: null,
        opinionPool: null
      }
    ]
  }
)
</script>

<template>
  <div class="items-list">
    <SingleItem
      v-for="(candidate, index) in props.candidates"
      :key="candidate.id"
      :candidate="candidate"
      :index-number="index"
    />
  </div>
</template>

<style scoped lang="scss">
.items-list {
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 20px auto;
}
</style>
