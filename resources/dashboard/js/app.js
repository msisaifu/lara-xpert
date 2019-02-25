window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from './routes/index';
import state from './store/index';
import MainApp from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store(state);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
