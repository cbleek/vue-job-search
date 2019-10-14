import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';
import Buefy from 'buefy';
import Yavue from './components/Yavue.vue';
import './assets/layout.scss';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueCustomElement);
Vue.customElement('yavue-widget',Yavue);