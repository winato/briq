import Vue from 'vue';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store';

window.Vue = Vue;

Vue.use(Toasted);

require('./bootstrap/toasts');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
