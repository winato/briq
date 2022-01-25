<template>
  <div class="alert-item">
    <div class="alert-item__group">
      <img class="alert-item__icon" src="../../../assets/alert-white.svg" alt="">
      <p class="alert-item__text">Text</p>
    </div>
    <time>17:30</time>
  </div>
</template>

<script>
export default {
  name: 'AlertItem',
};
</script>

<style lang="scss">
  @import "../../../scss/_variables.scss";

  .alert-item {
    background-color: $orange;
    border-radius: 0.313rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.125rem 5rem 1.125rem 1.375rem;
    color: white;
    margin-bottom: 0.313rem;

    &__icon {
      margin-right: 1.875rem;
    }

    &__group {
      display: flex;
      align-items: center;
    }
  }
</style>
