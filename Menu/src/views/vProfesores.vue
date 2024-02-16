<template>
  <div>
    <h1>Escribe: visible </h1>
    <div class="imagen">
      <img src="../assets/pug.jpg" v-if="validar">
      <img src="../assets/pugElegante.jpg" v-else>
    </div>
    <div class="formulario">
      <input type="text" v-model="texto">
    </div>
    <Regreso ruta="home"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Regreso from '../components/cRegreso.vue';

const texto = ref('');
const validar = computed(() => texto.value == 'visible' ? true : false);
</script>

<style scoped>
h1{
  text-align: center;
  font-size: 3em;
  color: #37c797;
  margin: auto;
}

img{
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}
.imagen{
  align-items: center;
  border: 0.25rem solid #37c797;
  height: 20rem;
  max-height: 20rem;
  width: 26rem;
  margin: 1rem auto;
  overflow: hidden;
}

.formulario{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
}
input{
  width: 20rem;
  height: 2rem;
  font-size: 1.5em;
  text-align: center;
  border: 0.25rem solid #37c797;
  border-radius: 0.5rem;
}
</style>
