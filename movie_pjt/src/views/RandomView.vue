<template>
  <div>
    <button type="submit" @click="PickRandomMovie" >PICK</button>
    <div v-if="PickedMovie">
      <!-- <img src="{{ movie.img.url }}" alt="">
      <div>{{ movie.title }}</div> -->
      
    </div>
    {{ movieList }}
  </div>
</template>

<script>
export default {
    name: 'RandomView',
    created() {
      this.$store.dispatch('requestMovies')
      this.PickedMovie()

    },
    methods: {
      PickRandomMovie() {
        this.$store.state.dispatch('PickedMovie', this.movie)
      }
    },
    computed: {
      PickedMovie() {
        return this.$store.state.PickedMovie
      },
      movieList() {
        return this.$store.state.movies
      }
    }
    
}
</script>

<style>

</style>