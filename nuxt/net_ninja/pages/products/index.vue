<script setup>
definePageMeta({
    layout: 'products',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products',)

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
        { name: 'description', content: 'A collection of products available for purchase.', },
    ],
})

</script>
<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>
<style scoped></style>