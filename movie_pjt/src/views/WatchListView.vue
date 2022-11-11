<template>
  <div>
    <WatchListForm @create-movie-title="createMovieTitle"/>
    <ul v-for="(watch, index) in watchList" :key="index">
      <WatchListItem :watch="watch" @delete-movie-title="deleteMovieTitle"/>
    </ul>
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