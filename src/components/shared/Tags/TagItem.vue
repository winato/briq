<template>
  <div class="tag-item">
    {{ label | removeDash}}
  </div>
</template>

<script>
export default {
  name: 'TagItem',

  filters: {
    removeDash(string) {
      return string.replace(/-/g, ' ');
    },
  },

  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import "../../../scss/_variables.scss";

  .tag-item {
    background-color: $green;
    padding: 0.3rem 1rem;
    border-radius: 1.875rem;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    font-weight: bold;
    font-size: 0.75rem;

    @media screen and (min-width: 992px) {
      padding: 0.5rem 1.688rem;
      margin-right: 0.563rem;
      margin-bottom: 0.563rem;
    }
  }
</style>
