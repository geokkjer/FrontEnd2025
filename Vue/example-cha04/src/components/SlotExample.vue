<template>
    <div>
        <header>
            <slot name=""header>Default Header</slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>
<style scoped>
div{
    background-color: lightgreen;
}</style>