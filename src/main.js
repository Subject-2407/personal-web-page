import './assets/styles.css'
import './assets/tailwind.css'

import VueWriter from "vue-writer";

import { createApp } from 'vue'
import App from './App.vue'

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'

import { smoothStart } from './start.js';

const app = createApp(App)

app.component('VueWriter', VueWriter)
    .component('Navbar', Navbar)
    .component('Home', Home)
    .component('About', About)
    .component('Skills', Skills)
    .component('Projects', Projects)

    .mount('#app')

smoothStart();
