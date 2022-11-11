<template>
  <div>
    <button @click="PickMovie">PICK</button>
    <div v-if="clicked">
      <img :src="`https://image.tmdb.org/t/p/original/${ RandomMovie[pickedmovie].backdrop_path }`" alt="">
      <div>
        {{RandomMovie[pickedmovie].title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RandomView',
    created() {
      this.$store.dispatch('requestMovies')
    },
    data() {
      return {
        clicked : false,
        pickedmovie : 0,
      }
    },
    methods: {
      PickMovie() {
        this.clicked = true
        this.pickedmovie = Math.floor(Math.random()*20)
      }
    },
    computed: {
      RandomMovie() {
        return this.$store.state.movies
      }
    }
}
</script>

<style>

</style>