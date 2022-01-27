<template>
  <component class="title" :class=[type] :is="tag">
    <slot/>
  </component>
</template>

<script>

export default {
  name: 'BTitle',

  props: {
    type: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'h1',
    },
  },
};
</script>

<style lang="scss">

@import "@/scss/_variables.scss";

.main {
  margin: 0 0 2.5rem;
  font-size: 2.2rem;

  @media screen and (min-width: 992px) {
    font-size: 3rem;
  }
}

.user-name {
  margin: 0;
  font-weight: bold;
  font-size: 1.1rem;
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
}

.empty {
  text-align: center;
  color: $dark-gray;
}

</style>
