<script setup lang="ts">
import AwsomeButton from './AwsomeButton.vue'
</script>

<template>
  <div class="modal">
    <article class="modal__content">
      <section class="modal__text">
        <h1>Do you want log in?</h1>
      </section>
      <section class="modal__buttons">
        <AwsomeButton text="yes" />
        <AwsomeButton text="no" />
      </section>
    </article>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  &__content {
    width: 500px;
    height: 500px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
