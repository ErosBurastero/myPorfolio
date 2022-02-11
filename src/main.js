import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: () =>
            import ('./pages/Myself.vue'),
    },

    {
        path: '/lines',
        component: () =>
            import ('./pages/Lines.vue'),
    },

    {
        path: '/myself',
        component: () =>
            import ('./pages/Myself.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')