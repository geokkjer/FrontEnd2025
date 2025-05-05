<script setup lang="ts">

import { useWindowWidth } from './useWindowWidth';
const { width } = useWindowWidth() 
</script>

<template>
    <p>Vindusbredde: {{ width }}</p>
</template>