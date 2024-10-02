import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import CharacterDetails from '../components/CharacterDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/character/:name', name: 'character-details', component: CharacterDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
