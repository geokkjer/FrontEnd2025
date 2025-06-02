<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex items-center justify-between p-4">
                <Nuxt-Link to="/products" class="font-bold">Nuxt Dojo Products</Nuxt-Link>

            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
    </footer>
</template>
<style scoped>
.router-link-active {
    color: #12b983;
}
</style>