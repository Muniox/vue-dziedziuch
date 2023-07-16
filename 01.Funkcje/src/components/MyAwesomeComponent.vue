<script setup lang="ts">
  function sayHello() {
    const welcomeText: string = "Siemka co tam?"
    console.log(addExclamationMark(welcomeText));
  }

  function addExclamationMark(text: string): string {
    return `${text}!`
  }

</script>

<template>
 <div>
   <button @click="sayHello">Say hello</button>
 </div>
</template>

<style scoped>

</style>
