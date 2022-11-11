<template>
  <div id="app">
    <nav>
      <router-link to="/">MovieView</router-link> |
      <router-link to="/random">RandomView</router-link> |
      <router-link to="/watch">WatchListView</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'
const API_KEY = '599a8101209112f2e04263af254f075e'

export default {
  name: 'App',
  created() {
    this.requestMovies()
  },
  methods: {
    requestMovies() {
      axios.get(API_URL, {
        params: {
            api_key: API_KEY,
            language: 'ko',
            region: 'KR',
          }
      }).then((response) => {
          this.$store.dispatch('TopRatedMovies' ,response.data.results)
      }).catch((error) => {
          console.error(error)
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
