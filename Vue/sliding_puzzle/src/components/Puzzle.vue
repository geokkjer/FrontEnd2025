<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const numbers = ref({
  numberValue: [3, 5, 6, 8, 1, null, 2, 4, 7],

})

function clickedNumber(index: number) {
  count.value++
  console.log(index)
  let blankIndex = findBlankIndex(index);
  console.log(blankIndex)
  if (blankIndex == null) return;
  numbers.value.numberValue[blankIndex] = numbers.value.numberValue[index];
  numbers.value.numberValue[index] = null;
  console.log(numbers.value.numberValue)
}
function findBlankIndex(index: number) {
  for (let delta of [-3, -1, 1, 3]) {
    let newIndex = index! + delta;
    if (newIndex < 0 || newIndex >= numbers.value.numberValue.length) continue;
    if (numbers.value.numberValue[newIndex] == null) {
      return newIndex;
    }
  }
  return null;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div id="numbers">
    <div v-for="(nr, i) in numbers.numberValue" :key="i" :class="i % 3 === 0 ? 'flis first' : 'flis'" @click="clickedNumber(i)">{{ nr }}
    </div>
    <div style="clear: both">Antall trekk: {{ count }}</div>
  </div>
</template>

<style scoped>
p.feilmelding {
  color: red;
}

div.trekkteller {
  clear: left;
}

div.flis {
  color: blue;
  background: lightblue;
  padding: 18px;
  margin: 10px;
  border: solid green 7px;
  width: 30px;
  height: 30px;
  float: left;
}

div.first {
  clear: left;
}
</style>
