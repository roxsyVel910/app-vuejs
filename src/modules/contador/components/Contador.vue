<template>
  <h1>Hello World</h1>
  <p>{{ count }}</p>
  <button @click="increment">incrementar</button>
  <button @click="decremetar">incrementar</button>

</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
function increment() {

  count.value++;
}
const decremetar = () => {
  count.value--;
}
</script>

<style scoped>


</style>
