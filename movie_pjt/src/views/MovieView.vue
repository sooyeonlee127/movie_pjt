<template>
  <b-card-group class="justify-content-md-center">
    <MovieCard
     v-for="(movie, index) in movieList" 
     :key=index
     :movie="movie"
    />
  </b-card-group>
</template>

<script>
import MovieCard from '@/components/MovieCard'
export default {
    name: 'MovieView',
    components: {
      MovieCard,
    },
    created() {
      this.$store.dispatch('requestMovies')
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