<template>
  <div>

  </div>
</template>

<script>
export default {
    name: 'MovieView',
    created() {
        console.log(this.$store.state.TopRatedMovies)
    }
}
</script>

<style>

</style>