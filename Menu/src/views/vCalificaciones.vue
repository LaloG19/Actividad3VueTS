<template>
  <div>
    <h1>Presiona cualquier tecla</h1>
    <div ref="containerImg" class="imagen" @keyup="imgVisible = !imgVisible" tabindex="0">
      <img src="../assets/pug.jpg" v-if="imgVisible == true">
      <img src="../assets/pugElegante.jpg" v-else>
    </div>
    <Regreso ruta="home" texto="Regresa desde Press Any Key"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Regreso from '../components/cRegreso.vue';

const imgVisible = ref(true);
const containerImg = ref(null);

onMounted(() => {
  containerImg.value.focus();
});
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
  outline: none;
}
</style>
