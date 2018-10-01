import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// register components
import ModelToolbar from '@/components/ModelToolbarComponent'
Vue.component('model-toolbar', ModelToolbar)

// styles 
import './assets/styles/style.scss'

// jquery
import $ from "jquery"

// bootstrap scripts
import 'bootstrap'
import { mapActions } from 'vuex';

// bootstrap tooltips
$(function () {
  $('body').tooltip({
      selector: '[data-toggle="tooltip"]'
  });
});

let token = localStorage.getItem("token")
if(token != null) {
  // axios default header
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
}

// filters
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// remove _id suffix
Vue.filter('idsuffix', function(value) {
  if(!value) return ''
  value = value.toString()
 
  return  value.replace("_id", "")
})

Vue.mixin({
  methods: {
    ...mapActions(["fetchModel"]) 
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
