import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
const state = {
  loading: true
}
const getters = {
  loading: state => state.loading ? state.loading : ''
}
const mutations = {
  setLoading (state, loading) {
    state.loading = loading
  }
}
const actions = {
  async startLoad (context) {
    context.commit('setLoading', true)
  },
  async endLoad (context) {
    context.commit('setLoading', false)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
