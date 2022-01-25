<template>
  <div class="alert-button" @click.prevent="triggerAlert">
    <img src="../../../assets/alert.svg" alt="">
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AlertItem',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions('alerts', ['createAlertAction']),

    triggerAlert() {
      this.createAlertAction(this.id);
    },
  },
};
</script>
