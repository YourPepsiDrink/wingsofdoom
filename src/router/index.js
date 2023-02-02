import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import { DOMErrorCodes } from "@vue/compiler-dom";

const routes = createRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ],
});


const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

export default router;
