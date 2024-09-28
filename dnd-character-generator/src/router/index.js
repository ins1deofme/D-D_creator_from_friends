import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Registration from '../components/Registration.vue';
import Rules from '../components/Rules.vue';
import CharacterEditor from '../components/CharacterEditor.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'RegistrationView',
    component: Registration,
  },
  {
    path: '/rules',
    name: 'RulesView',
    component: Rules,
  },
  {
    path: '/editor',
    name: 'CharacterEditor',
    component: CharacterEditor,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
