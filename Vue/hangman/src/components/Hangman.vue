<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const secretText = ref("TEE")
const currentText = ref("___")
const guessedLetter = ref('')

function reload() {
    location.reload()
}
function guess() {
    currentText.value = evaluateHangman(secretText.value, currentText.value, guessedLetter.value);

}
function evaluateHangman(secretText: string, currentText: string, guessedLetter:string): string {
    const index = secretText.indexOf(guessedLetter);
    if (index == -1) return currentText;
    const currentTextBeforeGuessedLetter = currentText.substring(0, index);
    const currentTextAfterGuessedLetter = currentText.substring(index + 1);
    const secretTextAfterGuessedLetter = secretText.substring(index + 1);
    return currentTextBeforeGuessedLetter + guessedLetter
        + evaluateHangman(secretTextAfterGuessedLetter, currentTextAfterGuessedLetter, guessedLetter);
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ currentText }}</h2>
    <input type="text" maxlength="1" v-model="guessedLetter" />
    <button @click="guess">Sjekk</button>

    <div v-if="(secretText === currentText)">Løst <button @click="reload">Start på nytt</button></div>

</template>
<style scoped></style>