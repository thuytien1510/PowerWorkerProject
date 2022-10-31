import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vSelect from 'vue-select'
import VueCountryCode from "vue-country-code-select";
import Select2 from 'v-select2-component';
require('@/assets/css/style.scss')
import store from './store';
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { faEnvelope, faArrowLeft, faCaretDown, faHistory, faMoon, faInfoCircle, faChevronLeft, faChevronRight, faExternalLinkAlt, faEyeSlash, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faRedditSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faEnvelope, faTwitter, faRedditSquare, faArrowLeft, faCaretDown, faQuestionCircle, faBell, faHistory, faMoon, faInfoCircle, faChevronLeft, faChevronRight, faExternalLinkAlt, faEyeSlash, faLock, faSpinner, faFacebookSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Select2', Select2);

Vue.use(VueCountryCode);
Vue.use(VueSweetalert2);
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://103.18.7.212:1734';
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Axios.defaults.headers.post['Content-Type'] = ' application/json';

Axios.interceptors.request.use(function (config) {
  NProgress.start()
  const token = store.getters.isLoggedIn;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});
Axios.interceptors.response.use(function (config) {
  NProgress.done()
  return config;
});
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
