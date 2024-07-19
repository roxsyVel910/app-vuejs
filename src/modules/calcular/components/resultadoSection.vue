<template>
    <div class="resultado"> {{ resultado }}</div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(
    [
        'resultado',
    ]
    );
</script>

<style scoped>
</style>