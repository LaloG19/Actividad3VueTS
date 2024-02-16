<template>
  <div>
    <h1>Ingresa 3 valores al array</h1>
    <div class="imagen">
      <img src="../assets/pug.jpg" v-if="validar">
      <img src="../assets/pugElegante.jpg" v-else>
    </div>
    <div class="formulario">
      <div class="formulario">
        <input type="text" v-model="texto">
        <button @click="Agregar"> Agregar valor </button>
        <label>
          Cantidad de registros: {{ array.length }} 
        </label>
      </div>
    </div>
    <Regreso ruta="home" texto="Regresa desde '3 valores'"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import Regreso from '../components/cRegreso.vue';

const texto = ref('');
const validar = computed(() => array.value.length <= 3 ? true : false);
const array:Ref<string[]> = ref([]);

function Agregar(){
  if(texto.value != ''){
    array.value.push(texto.value);
    texto.value = '';
  }
}
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
button {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 3px solid #37c797;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

button:hover {
  background: #37c797;
  box-shadow: 0 0 30px 5px rgba(71, 255, 194, 0.815);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

button:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

button::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

button:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
</style>
