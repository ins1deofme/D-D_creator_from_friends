import { createRouter, createWebHistory } from 'vue-router';
import CharacterDetails from '../components/CharacterDetails.vue';
import MainPage from '@/pages/MainPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage , // Укажите компонент, который будет отображаться на главной странице
  },
  {
    path: '/character/:name', // Путь с параметром name
    name: 'character-details', // Укажите имя маршрута
    component: CharacterDetails, // Компонент, который будет отображаться
  },
  // Другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
