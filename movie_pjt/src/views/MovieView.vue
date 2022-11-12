<template>
  <div class="container" style="max-width: 1200px !important;">
    <b-card-group class="justify-content-md-center">
      <MovieCard
      v-for="(movie, index) in movieList" 
      :key="`movieList-${index}`"
      :movie="movie"
      />
    </b-card-group>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
export default {
    name: 'MovieView',
    components: {
      MovieCard,
    },
    created() {
      this.$store.dispatch('requestMovies') // index.js에서 requestMovies(actions) 호출
    },
    computed: {
      movieList() {
        return this.$store.state.movies
      }
    }
}
</script>

<style>

</style>