<template>
  <div class="input-group mb-3">
    <input 
    type="text" 
    class="form-control" 
    placeholder="" 
    aria-label="Example text with button addon" 
    aria-describedby="button-addon1"
    v-model="movieTitle"
    @keyup.enter="createMovieTitle"
    >
    <button class="btn btn-outline-primary" type="button" id="button-addon1" @click="createMovieTitle">Add</button>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
        movieTitle: null,
    }
  },
  methods: {
    createMovieTitle: function () {
      // 유효성 검증
      if (this.movieTitle==null){               // 아무것도 입력하지 않은 경우
        alert('영화 이름을 입력해주세요')
      } else if (this.movieTitle.trim() == ''){ // 공백만 입력된 경우
        alert('영화 이름을 제대로 입력해주세요')
      } else {
        this.$emit('create-movie-title', this.movieTitle)
        this.movieTitle = null
      }
    }
  }
}
</script>

<style>

</style>