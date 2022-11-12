<template>
    <div class="container" style="max-width:700px !important;">
      <button @click="PickMovie" class="btn btn-primary btn-lg w-100" id="PickBtn">Pick!</button>
      <div v-if="randomMovieId>-1" class="card">
        <img :src="`https://image.tmdb.org/t/p/original/${ MovieList[randomMovieId].backdrop_path }`" alt="">
        <div class="nav-title py-3 px-1 fw-bold">
          {{ MovieList[randomMovieId].title }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'RandomView',
    data() {
      return {
        randomMovieId : -1,
      }
    },
    methods: {
      PickMovie() {
        let tmp = 0
        do { // 이전과 같은 randomMovieId가 나온 경우 다시 선택
          tmp = Math.floor(Math.random() * this.MovieList.length) 
        } 
        while (tmp == this.randomMovieId) 
        this.randomMovieId = tmp

        const PickBtn = document.querySelector('#PickBtn')
        PickBtn.innerText = "Pick Again!"
      }
    },
    computed: {
      MovieList() {
        return this.$store.state.movies
      }
    },
    created() {
      this.$store.dispatch('requestMovies')
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