<script setup lang="ts">
import { ref, type Ref } from 'vue'
import AwsomeButton from './AwsomeButton.vue'
import AwsomeFooter from './AwsomeFooter.vue'
import AwsomeModal from './AwsomeModal.vue'

const isModalVisible: Ref<boolean> = ref(false)
</script>

<template>
  <div class="container">
    <AwsomeButton text="Log in" @click="isModalVisible = true" />
    <Teleport to="body">
      <AwsomeModal v-show="isModalVisible" />
    </Teleport>
    <AwsomeFooter />
  </div>
</template>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
