<template> 
    <div class = "container">
        <BarraLateral></BarraLateral>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
import BarraLateral from '../components/BarraLateral.vue'
</script>
<style>
.container {
    display:flex;

}
.content {
    flex: 1;
    padding: 20px;

}
</style>