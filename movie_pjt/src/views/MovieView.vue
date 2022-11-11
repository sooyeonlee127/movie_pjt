<template>
  <div>
    {{ movieList }}
  </div>
</template>

<script>
export default {
    name: 'MovieView',
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