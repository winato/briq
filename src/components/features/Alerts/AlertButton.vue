<template>
  <div class="alert-button" @click.prevent="open">
    <img src="../../../assets/alert.svg" alt="">
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AlertItem',

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapMutations('alerts', ['openModal']),

    open() {
      this.openModal(this.id);
    },
  },
};
</script>

<style lang="scss">
  .alert-button {
    cursor: pointer;
    opacity: .7;
    transition: opacity .1s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
</style>
