import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CharacterView from '@/components/CharacterView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/character/:id',
    name: 'CharacterView',
    component: CharacterView,
    props: route => ({
      character: HomeView.data().characters.find(c => c.id === parseInt(route.params.id, 10))
    })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
