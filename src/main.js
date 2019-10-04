import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'

Vue.use(Buefy, {});
Vue.prototype.$http = require('axios');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
