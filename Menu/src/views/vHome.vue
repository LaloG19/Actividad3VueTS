<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Regreso from '../components/cRegreso.vue'
</script>

<template>
  <h1>Menu de secciones: (q es un layout ni me pregunte)</h1>
  <div class="Menu">
    <RouterLink :to="{name: 'bolsa'}"> Bolsa de trabajo </RouterLink>
    <RouterLink :to="{name: 'carreras'}"> Carreras </RouterLink>
    <RouterLink :to="{name: 'extraescolares'}"> Extraescolares </RouterLink>
    <RouterLink :to="{name: 'profesores'}"> Profesores </RouterLink>
    <RouterLink :to="{name: 'calificaciones'}"> Calificaciones </RouterLink>
  </div>

  <Regreso ruta="home"/>
</template>

<style scoped>

h1{
  text-align: center;
  font-size: 3rem;
  color: #37c797;
  margin: 1rem auto;

}
.Menu{
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: center;
  
  gap: 10px;
  font-size: 1.5em;
  background-color: #37c797;
  border: 0.5rem solid #47ffc2;
  border-radius: 1rem;
  margin-top: 2rem;
}

a{
  color: #000;
  font-weight: 500;
  margin: 0rem 1rem;
}

a:hover{
  color: #004e34;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0rem 1.5rem;
}
</style>