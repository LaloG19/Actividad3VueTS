<template>
  <div>
    <h1>Presiona la imagen</h1>
    <div class="imagen">
      <img src="../assets/pug.jpg" @click="imgVisible = !imgVisible" v-if="imgVisible == true">
      <img src="../assets/pugElegante.jpg" @click="imgVisible = !imgVisible" v-else>
    </div>
    <Regreso ruta="home" texto="Regresa desde Clickeo a Imagen"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Regreso from '../components/cRegreso.vue';

const imgVisible = ref(true);

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
</style>
