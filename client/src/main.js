// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import Axios from 'axios'
import App from './App'
import router from './router'

var config = {
  apiKey: "AIzaSyD1V4lqU8dCUpQkZUEbRXEOWtbifhfpA6Q",
  authDomain: "tamastro-12.firebaseapp.com",
  databaseURL: "https://tamastro-12.firebaseio.com",
  projectId: "tamastro-12",
  storageBucket: "tamastro-12.appspot.com",
  messagingSenderId: "118127145065"
};
const firebaseApp = Firebase.initializeApp(config)
Vue.prototype.$db = firebaseApp.database()
Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})