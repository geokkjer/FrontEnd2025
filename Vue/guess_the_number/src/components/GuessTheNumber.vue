<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ 
}>()

const secret_num = ref(0)
const guessed_num = ref(0)
const guessed_num_input = ref(0) 

function start(){
  guessed_num.value = 0
  secret_num.value = Math.ceil(Math.random() * 100)
  guessed_num_input.value = 0
}
function check() {
  if (guessed_num != null){
    guessed_num.value = guessed_num_input.value
  }
}
</script>

<template>
  <h3>Hemmelig nummer: {{ secret_num }}</h3>
  <div class="card">
    <input type="text" v-model="guessed_num_input"/>
    <br>
    <button @click="check()">sjekk</button>
    <button @click="start()">start</button>
    <p v-if="(guessed_num == secret_num)">Riktig</p>
    <p v-else-if="(guessed_num > secret_num)">For høyt</p>
    <p v-else-if="(guessed_num < secret_num)">For Lavt</p>
  </div>
</template>

<style scoped>

</style>
