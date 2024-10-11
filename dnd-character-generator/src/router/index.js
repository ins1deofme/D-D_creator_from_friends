import { createRouter, createWebHistory } from 'vue-router';
import CharacterDetails from '../components/CharacterDetails.vue';

const routes = [
  {
    path: '/character/:name',
    name: 'character-details',
    component: CharacterDetails,
    props: (route) => ({ character: JSON.parse(route.params.character) }), // Передаем как JSON
  },
  // Другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;