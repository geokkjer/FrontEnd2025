<script setup lang="ts">
const props = defineProps<{ modelValue: number }>()
type EmitFunction = (e: "update:modelValue", value: number) => void;
const emit = defineEmits<EmitFunction>();

function onInput(event: Event) {
  const value: number = (event.target as HTMLInputElement).valueAsNumber;
  emit("update:modelValue", value)
}
</script>

<template>
  <div>
    <p>CustomInput Component start</p>
    <input 
    type="range" 
    min="1"
    max="100"
    step="1"
    :value="props.modelValue"
    @input="onInput"
    />
    <p>CustomInput Component slutt</p>
  </div>
</template>

<style scoped>
div{
  background-color: lightblue;
}</style>
