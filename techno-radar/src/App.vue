<template>
  <div>
    <homeApp msg="" />
    <eventsApp />
  </div>
</template>

<script>
import homeApp from "./components/home.vue";
import eventsApp from "./components/events.vue";

export default {
  name: "App",
  components: {
    homeApp,
    eventsApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Anek Malayalam", sans-serif;
  /* Global Fade Effect */
  transition: 0.5s;
}
</style>
