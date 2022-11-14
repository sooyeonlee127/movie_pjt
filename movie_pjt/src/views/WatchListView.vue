<template>
  <div class="container" style="max-width:700px !important;">
    <WatchListForm @create-movie-title="createMovieTitle"/>
    <div class="list-group">
    <a class="list-group-item list-group-item-action m-0" v-for="(watch, index) in watchList" :key="`watchList-${index}`">
      <WatchListItem :watch="watch" @delete-movie-title="deleteMovieTitle"/>
    </a>
    </div>
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'

export default {
    name: 'WatchListView',
    components: {
      WatchListForm,
      WatchListItem,
    },
    data() {
      return {
        watchList: []
      }
      
    },
    methods: {
      createMovieTitle(movieTitle) {
        const watch = {
          title: movieTitle
        }
        this.watchList.push(watch)
      },
      deleteMovieTitle: function (watch) {
        const index = this.watchList.indexOf(watch)
        this.watchList.splice(index, 1)    
    }

    }
}
</script>

<style>

</style>