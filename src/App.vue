<template>
  <div id="app">
    <IndexComponent />
  </div>
</template>

<script>
import IndexComponent from "./components/IndexComponent.vue";

export default {
  name: "App",
  components: {
    IndexComponent,
  },
};
</script>

<style>
body {
  font-family: "Overpass Mono", monospace;
  font-weight: normal;
  font-size: medium;
}
</style>
