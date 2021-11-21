import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const app = Vue.createApp(App)
app.component('DatePicker', Vue3PersianDatetimePicker).use(VueAxios, axios).use(store).use(router).mount('#app')
