<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="" class="mx-auto my-7 rounded-lg shadow-lg">
            </div>
            <div class="p-7">
                <h2 class="text-4xl font-bold my-7">{{ product.title }}</h2>
                <p class="text-xl font-semibold mt-2 my-7">Price - $ {{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-s">add_shopping_cart</i>
                    <span class="">Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product'])
const product = props.product
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>