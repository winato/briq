<template>
  <div class="tag-item">
    dinner
  </div>
</template>

<script>
export default {
  name: 'Tags',
};
</script>

<style lang="scss">
  @import "../../../scss/_variables.scss";

  .tag-item {
    background-color: $green;
    padding: 0.313rem 1.688rem;
    border-radius: 1.875rem;
    margin-right: 0.563rem;
    margin-bottom: 0.563rem;
    font-weight: bold;
    font-size: 0.75rem;
  }
</style>
