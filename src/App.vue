<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  padding: 1em;
  background-color: #333;
}
nav a {
  margin-right: 1em;
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
