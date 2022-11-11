<template>
  <div class="mt-3">
    <b-card-group deck>
      <b-card class="m-3" 
        :img-src="`https://image.tmdb.org/t/p/original/${ movie.poster_path }`" 
        img-alt="Image" 
        img-top style="max-width: 250px;"
        >
        <b-card-text class="text-xl-center">
          {{ movie.original_title }}
        </b-card-text>
        <br>
        <b-card-text class="text-sm-center">
          {{ movie.overview }}
        </b-card-text>
      </b-card>
    </b-card-group>
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