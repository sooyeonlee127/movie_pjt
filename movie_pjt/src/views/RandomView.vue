<template>
    <div class="container">
      <button @click="PickMovie" class="btn btn-primary btn-lg w-100">PICK</button>
      <div v-if="clicked" class="card">
        <img :src="`https://image.tmdb.org/t/p/original/${ RandomMovie[pickedmovie].backdrop_path }`" alt="">
        <div class="nav-title py-3 px-1 fw-bold">
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
  .card {
    max-height: 1000px;
    overflow: hidden;
  }
  .container {
    margin: 20px 0px;
    max-width: 1000px !important;
  }
  .container > button {
    margin-bottom: 10px;
  }
  .nav-title {
    border-top: 1px solid rgb(214, 214, 214);
  }
</style>