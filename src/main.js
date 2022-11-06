import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router.js';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
const app = createApp(App);
const pinia = createPinia();

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.use(router);
app.use(pinia);

app.mount('#app');
