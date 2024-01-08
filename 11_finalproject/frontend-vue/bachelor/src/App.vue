<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <h1 class="text-info">Bachelor Theses</h1>
        <RouterLink to="/" class="nav-link p-2">Home</RouterLink>
        <RouterLink to="/about" class="nav-link p-2">Admin</RouterLink>
      </nav>
    </div>
  </header>
  <br/> 
  <RouterView />
</template>
<style scoped>
.navbar h1{
  margin-right: 50px;
}
.wrapper {
  display: flex;
  background-color: black;
}
.navbar{
  width: 100%;
  display: flex;
  justify-content: center;
}
.nav-link {
  width: 150px;
  height: 50px;
  text-align: center;
  border: 1px solid black;
  margin: 0px 5px;
  border-radius: 10px;
}
.nav-link:hover {
  background-color: lightblue;
}
</style>