<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    type: string
    placeholder: string
    firstName: string
    lastName: string
  }>(),
  {
    type: 'text',
    placeholder: 'Type something...'
  }
)

defineEmits<{
  update: [value: string]
}>()

const { name, type, placeholder, firstName, lastName } = toRefs(props)
</script>

<template>
  <div class="search">
    <input
      :name="name"
      :type="type"
      class="input"
      :placeholder="placeholder"
      @input="$emit('update:firstName', $event.target['value'])"
      :value="firstName"
    />
    <input
      :name="name"
      :type="type"
      class="input"
      :placeholder="placeholder"
      @input="$emit('update:lastName', $event.target['value'])"
      :value="lastName"
    />
    <!--    <label :for="name" class="label">{{ placeholder }}</label>-->
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}

.input {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  width: 300px;
  border-bottom: 3px solid #35495e;
  &:focus {
    outline: none;
    border-bottom-color: #42b883;
  }
  &::-webkit-input-placeholder {
    color: #000;
  }
  &:placeholder-shown + .label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
}
.label {
  font-size: 16px;
  margin-left: 20px;
  margin-top: 5px;
  display: block;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
}
.result {
  margin-top: 100px;
}
.button {
  margin-top: 100px;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  border: 3px solid #000;
  padding: 10px 20px;
  font-size: 24px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
}
</style>
