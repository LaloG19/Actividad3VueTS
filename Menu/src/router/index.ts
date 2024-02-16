import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/vHome.vue'
import BolsaView from '../views/vBolsaTrabajo.vue'
import CarrerasView from '@/views/vCarreras.vue'
import ExtraescolaresView from '@/views/vExtraescolares.vue'
import ProfesoresView from '@/views/vProfesores.vue'
import CalificacionesView from '@/views/vCalificaciones.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bolsa',
      name: 'bolsa',
      component: BolsaView
    },
    {
      path: '/carreras',
      name: 'carreras',
      component: CarrerasView
    },
    {
      path: '/extraescolares',
      name: 'extraescolares',
      component: ExtraescolaresView
    },
    {
      path: '/profesores',
      name: 'profesores',
      component: ProfesoresView
    },
    {
      path: '/calificaciones',
      name: 'calificaciones',
      component: CalificacionesView
    }
  ]
})

export default router
