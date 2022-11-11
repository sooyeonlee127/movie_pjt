<template>
  <div>
    {{ movie.original_title }}
    <br>
    <img :src="`https://image.tmdb.org/t/p/original/${ movie.poster_path }`" width=100>
    <br>
    {{ movie.overview }}
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
      movie: Object
    }
}
</script>

<style>

</style>