import VueRouter from '../-router'
import Vue from 'vue'
import about from '../../src/components/about.vue'
import index from '../../src/components/index.vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: "/",
            component: index
        },
        {
            path: "/about",
            component: about
        }
    ]
})