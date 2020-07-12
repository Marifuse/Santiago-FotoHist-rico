import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'https://us-central1-chilefotos-d4ddd.cloudfunctions.net/pictures'

function emptyPicture()  {
  return{
    id: null, data: { title: '', img: '', description:'' }
  }
}

export default new Vuex.Store({
  state: {
    currentUser: null,
    pictures: [],
    currentPicture: emptyPicture(),
    loading: false,
  },
  mutations: {
    SET_CURRENT_USER(state, user) { state.currentUser= user },
    DISPLAY_PICTURE_FORM(state) { state.showForm = true },
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    SET_EMPTY_PICTURE(state) {
      state.currentPicture.id = null
      const base = emptyPicture()
      Object.keys(base.data).forEach(key => {
        state.currentPicture.data[key] = base.data[key]
      })
    },
    SET_PICTURES(state, data){state.pictures = data},
    UPDATE_TITLE(state, title) { state.currentPicture.data.title = title },
    UPDATE_IMG(state, img) { state.currentPicture.data.img = img },
    UPDATE_DESCRIPTION(state, description) { state.currentPicture.data.description = description },
    SET_CURRENT_PICTURE(state, picture) {state.currentPicture = picture },
  },
  actions: {
    setCurrentUser({commit}, user) { commit('SET_CURRENT_USER', user) },
    setPictures({commit}) {
      commit('SET_LOADING')
      axios.get(`${baseUrl}/pictures`)
      .then(response => {
        commit('SET_PICTURES', response.data)
        commit('SET_EMPTY_PICTURE')
      }).finally(() => {
        commit('UNSET_LOADING')
      }) 
    },
    displayPictureForm({commit}) { commit('DISPLAY_PICTURE_FORM') },
    cancelForm({commit}) { 
      commit('HIDE_PICTURE_FORM')
      commit('SET_EMPTY_PICTURE') 
    },
    updateTitle({commit}, title) { commit('UPDATE_TITLE', title) },
    updateImg({commit}, img) { commit('UPDATE_IMG', img) },
    updateDescription({commit}, description) { commit('UPDATE_DESCRIPTION', description) },
    postPicture({state, dispatch}) {
      axios.post(`${baseUrl}/picture`, state.currentPicture.data)
      .then(() => {
        dispatch('setPictures')
      })
    },
    updatePicture({dispatch, state}, id) {
      axios.put(`${baseUrl}/picture/${id}`, state.currentPicture.data)
      .then(() => {
        dispatch('setPictures')
      })
    },
    deletePicture({dispatch}, id) {
      axios.delete(`${baseUrl}/picture/${id}`)
      .then(() => {
        dispatch('setPictures')
      })
    },
    setCurrentPicture({commit, getters}, id) {
      // Vamos a buscar el elemento en la API
      // buscar si tenemos el elemento en la lista actual
      let targetPicture = getters.searchProductById(id)
      if (targetPicture) {
        // si se encuentra, actualizar con esos datos
        commit('SET_CURRENT_PICTURE', targetPicture)
      } else {
        // Si no, llamar al axios
        axios.get(`${baseUrl}/picture/${id}`)
        .then((response) => {
          commit('SET_CURRENT_PICTURE', response.data)
        })
      }  
    },
  },
  modules: {
  },
  getters: {
    searchProductById: (state) => (id) => {
      return state.pictures.find((picture) => {
        return picture.id == id
      })
    }
  }
})
