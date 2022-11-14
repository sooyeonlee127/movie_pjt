<template>
  <div @click="deleteMovieTitle" style="cursor: pointer;">
    {{ watch.title }}
  </div>
</template>

<script>
export default {
    name: 'WatchListItem',
    props: {
      watch: Object,
    },
    methods: {
      deleteMovieTitle() {
        this.$emit('delete-movie-title', this.watch)
      }
    }
}
</script>

<style>

</style>