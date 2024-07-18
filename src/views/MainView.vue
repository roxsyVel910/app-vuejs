<template> 
<Header></Header>
    <div class = "container">
        <BarraLateral></BarraLateral>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
import BarraLateral from '../components/BarraLateral.vue';
import Header from '../components/Header.vue';
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