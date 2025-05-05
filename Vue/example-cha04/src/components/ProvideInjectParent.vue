<script setup lang="ts">
import { provide } from 'vue';
import ProvideInjectChild from './ProvideInjectChild.vue';

provide<string, string>('sharedMessage', 'Hei fra Parent!')
</script>

<template>
    <ProvideInjectChild />
</template>