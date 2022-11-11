import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TopRatedMovies: [],
  },
  getters: {
  },
  mutations: {
    TOP_RATED_MOVIES()
  },
  actions: {
    TopRatedMovies(context, movies) {
      context.commit(('TOP_RATED_MOVIES', movies))
    }

  },
  modules: {
  }
})
