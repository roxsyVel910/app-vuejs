<template> 
<Header :mensaje="texto"></Header>
    <div class = "container">
        <BarraLateral></BarraLateral>
        <div class="content">
            <input type="text" v-model="texto">
            {{ texto }}
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
import BarraLateral from '../components/BarraLateral.vue';
import Header from '../components/Header.vue';
import {ref} from 'vue';

const texto = ref('');
</script>
<style>
.container {
    display:flex;
    background: #fff;
    color: black;

}
.content {
    flex: 1;
    padding: 20px;

}
</style>