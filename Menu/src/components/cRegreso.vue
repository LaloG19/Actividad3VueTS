<template>
        <div class="Regresar">
            <RouterLink :to="{ name: ruta}"> {{ texto }}</RouterLink>
        </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps({
    ruta: {
        type: String,
        default: 'home'
    },
    texto: {
        type: String,
        default: 'Home: Innecesario (?)'
    }
});

</script>

<style scoped>

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

.Regresar{
  display: flex;
  flex-direction: row;
  
  width: 20%;
  margin: auto;
  align-items: center;
  justify-content: center;
  
  gap: 10px;
  font-size: 1.5em;
  background-color: #37c797;
  border: 0.5rem solid #47ffc2;
  border-radius: 1rem;
  margin-top: 2rem;
}
</style>
