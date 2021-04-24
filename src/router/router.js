import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import AboutUs from '../pages/AboutUs.vue'
import Services from '../pages/Services.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contacts from '../pages/Contact.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/aboutUs',
            name: 'About',
            component: AboutUs
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        
    ]
}) 

export default router;