<template>
  <div id="app">
    <nav>
      <a class="navbar-logo" href="#">
        <img src="https://www.ssafy.com/swp_m/images/common/logo3.png" alt="" class="d-inline-block align-text-top">
      </a>
      <div class="nav justify-content-end">
        <router-link to="/" class="nav-link">MovieView</router-link>
        <router-link to="/random" class="nav-link">RandomView</router-link>
        <router-link to="/watch" class="nav-link">WatchListView</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}

nav {
  padding: 10px 30px;
  background-color: #e6f2ff;
}

nav a.nav-link {
  font-weight: bold;
  color: #6e6e6e;
}

nav .nav-link:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-logo img{
  position: absolute;
  top: 5px;
  left: 10px;
  width: 70px;
}
</style>
