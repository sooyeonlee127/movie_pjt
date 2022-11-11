<template>
  <div>
    <button type="submit" @click="PickRandomMovie" >PICK</button>
    <div v-if="PickedMovie">
      <!-- <img src="{{ movie.img.url }}" alt="">
      <div>{{ movie.title }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'RandomView',
    created() {
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
      }
    }
}
</script>

<style>

</style>