<script setup lang="ts">
    
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
</template>

<style scoped>

</style>