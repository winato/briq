<template>
  <div class="alerts">
    <AlertItem v-for="alert in alerts" :key="alert.timestamp" v-bind="alert"/>
  </div>
</template>

<script>
import AlertItem from './AlertItem.vue';

export default {
  name: 'Alerts',

  components: {
    AlertItem,
  },

  props: {
    alerts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">

.alerts {
  margin-bottom: 2rem;
}

</style>
