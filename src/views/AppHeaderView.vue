<template>
  <header>
    <h1>My App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeaderView'
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav {
  display: flex;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
</style>
