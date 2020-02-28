import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios.create({timeout: 10000})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
