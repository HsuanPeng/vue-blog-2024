<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      msgTest: "Welcome to Your Vue.js App Lisa is Testing dddd",
    };
  },
  components: {
    HelloWorld,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
