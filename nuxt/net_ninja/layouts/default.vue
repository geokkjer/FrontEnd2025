<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex items-center justify-between p-4">
                <Nuxt-Link to="/" class="font-bold text-2xl">Nuxt Dojo</Nuxt-Link>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
       <slot/>
        </div>
    </div>
    <footer>
        <p>&copy; 2025 Nuxt Dojo</p>
    </footer>
</template>
<style scoped>
.router-link-active {
    color: #12b983;
}
</style>