<template>
  <button type="button" class="button" @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss">
  @import "../../../scss/_variables.scss";

  .button {
    display: flex;
    border: none;
    padding: .5rem 2.5rem;
    border-radius: 1rem;
    background-color: $green;
    cursor: pointer;
    transition: all .1s ease-in-out;
    font-weight: bold;

    &:hover {
      background-color: $green-darken;
    }
  }
</style>
