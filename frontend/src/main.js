import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLoaders from 'vue-loaders'

import VueSimpleSuggest from 'vue-simple-suggest'
Vue.use(VueSimpleSuggest)

Vue.use(VueLoaders)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
