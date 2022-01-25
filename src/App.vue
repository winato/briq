<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/shared/Header/index.vue';

export default {
  name: 'App',

  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./scss/global.scss";

</style>
