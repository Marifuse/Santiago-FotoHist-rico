import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
  },
  modules: {
  }
})
