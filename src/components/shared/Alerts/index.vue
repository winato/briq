<template>
  <div class="alerts">
    <AlertItem/>
  </div>
</template>

<script>
import AlertItem from './AlertItem.vue';

export default {
  name: 'Alerts',

  components: {
    AlertItem,
  },
};
</script>

<style lang="scss">
  .alerts {
    margin-bottom: 2rem;
  }
</style>
