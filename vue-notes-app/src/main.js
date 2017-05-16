// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './vuex/store.js';

// 激活Vue调试工具vue-devtools
Vue.config.devtools = true;

Vue.use(VueRouter);

const routes = {
  path: '/index',
  component: App
};

const router = new VueRouter(
  routes
);
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
  }
).$mount('#app');
