import { createRouter, createWebHistory } from 'vue-router';

import ShowSoundboard from './pages/ShowSoundboard.vue';
import ManageSoundboard from './pages/ManageSoundboard.vue';
import ShowSoundDetails from './pages/ShowSoundDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/show' },
    { path: '/show', component: ShowSoundboard },
    { path: '/manage', component: ManageSoundboard },
    { path: '/manage/:id', component: ShowSoundDetails },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
