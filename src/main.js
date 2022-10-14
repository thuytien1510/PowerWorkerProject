import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vSelect from 'vue-select'
import VueCountryCode from "vue-country-code-select";
import Select2 from 'v-select2-component';
import "@/assets/css/style.scss";

Vue.component('Select2', Select2);

Vue.use(VueCountryCode);

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.prototype.$token = false

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
