<template>
  <div>
    <h1>보고싶은 영화</h1>
    <input 
      type="text" 
      v-model="movieTitle"
      @keyup.enter="createMovieTitle"
    >
  </div>
</template>

<script>
export default {
    name: 'WatchListForm',
    data: function () {
      return {
        movieTitle: null,
    }
  },
  methods: {
    createMovieTitle: function () {
      this.$emit('create-movie-title', this.movieTitle)
      this.movieTitle = null
    }
  }
}
</script>

<style>

</style>