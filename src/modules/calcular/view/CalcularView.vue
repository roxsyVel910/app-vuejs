<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection  v-if = "mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)"></div>
    <div v-else> aqui no se muestra nada</div>
</template>
<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../components/resultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(() => {
    return valor.value * 3;
})

const mostrarElemento = computed(() => {
    return valor.value > 10;
})

</script>
<style scoped>

</style>