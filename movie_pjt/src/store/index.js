import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
  },
  mutations: {
    TOP_RATED_MOVIES(state, movies) {
      state.movies = movies
    }
  },
  actions: {
      requestMovies(context) {
        const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'
        const API_KEY = 'secret'

        axios.get(API_URL, {
          params: {
              api_key: API_KEY,
              language: 'ko',
              region: 'KR',
          }
        }).then((response) => {
          const movies = response.data.results
          context.commit('TOP_RATED_MOVIES', movies)

        }).catch((error) => {
            console.error(error)
        })
    }
  },

  modules: {
  }
})
