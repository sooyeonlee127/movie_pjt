<template>
  <div class="container">
    <h3>보고싶은 영화</h3>
    <br>
    <b-input-group>
      <b-form-input
        type="text" 
        v-model="movieTitle"
        @keyup.enter="createMovieTitle"
      >
      </b-form-input>
      <b-input-group-append>
        <b-button variant="outline-success" @click="createMovieTitle">button</b-button>
      </b-input-group-append>
    </b-input-group>

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