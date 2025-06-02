<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil illo doloremque, quisquam nostrum libero reprehenderit consectetur praesentium quia dolores dolor enim. Animi ratione excepturi vitae possimus? Velit a eveniet libero!</p>
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
definePageMeta({
    layout: 'products',
})
</script>

<style  scoped>

</style>