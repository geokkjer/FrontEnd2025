<script setup lang="ts">
    import EmitChild from './EmitChild.vue';
    function onUserClicked(payload: {id: number; name:string}){
        alert(`Bruker valgt: ${payload.name}`)
    }

    function onCancelled(){
        alert('Handling avbrutt')
    }
</script>
<template>
    <EmitChild @userClicked="onUserClicked" @cancelled="onCancelled" />
</template>