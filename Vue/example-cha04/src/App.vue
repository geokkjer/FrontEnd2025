<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue'
import CustomInputSimple from './components/CustomInputSimple.vue';
import SlotExample from './components/SlotExample.vue';
import ProvideInjectParent from './components/ProvideInjectParent.vue';
import ComposableExample from './components/ComposableExample.vue';
import EmitParent from './components/EmitParent.vue';
const inputValue = ref<number>(45)
const inputValue2 = ref<number>(0)


function handleValueChanged(n: number) {
  inputValue.value = n;
}
</script>

<template>
  <div>
    <h1>Introduksjon til kapittel 4 - eksempler</h1>
    <div class="example">
      <h3>1a. komponent med props og emit</h3>
      <CustomInputSimple :start-value="inputValue" @value-changed="handleValueChanged" />
      <p>Input Value: {{ inputValue }}</p>
    </div>
    <div class="example">
      <h3>1b. komponent med v-model og emit</h3>
      <CustomInput v-model="inputValue2" />
      <p>Input Value: {{ inputValue2 }}</p>
    </div>
    <div class="example">
      <h3>2. provide og inject istedenfor props når flere nivåer mellom parent og child</h3>
      <ProvideInjectParent />
    </div>
    <div class="example">
      <h3>3. slot eksempel</h3>
      <SlotExample>
        <template #header>
          <h2>Dette er header slotten</h2>
        </template>
        <p>Default slot innhold</p>
      </SlotExample>
    </div>
    <div class="example">
      <h3>4. composable</h3>
      <ComposableExample />
    </div>

    <div class="example">
      <h3>5. emit med sterk typing</h3>
      <EmitParent />
    </div>
  </div>

</template>

<style scoped>
div.example {
  width: 500px;
  padding: 4px;
  margin: 10px;
  background-color: #7af;
  border-radius: 10px;
}

div.example h3 {
  color: white;
}
</style>
