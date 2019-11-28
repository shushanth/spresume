import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee);

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    FontAwesomeIcon,
  }
})