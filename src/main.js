import Vue from 'vue';
// import {useVuelidate} from '@vuelidate/core';
import VDatetimePicker from 'v-datetime-field';
import App from './App.vue';
import router from './router/index.js';
import vuetify from './plugins/vuetify';
import store from './store';


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  VDatetimePicker,
  // useVuelidate,
  store,
  render: (h) => h(App)
}).$mount('#app');
