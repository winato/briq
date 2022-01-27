<template>
  <div class="not-found">
    <div class="container">
      <BTitle tag="h1" class="not-found__title">
        Ooops!
      </BTitle>
      <BTitle
        tag="h4"
        type="subtitle"
        class="not-found__subtitle"
      >
        We can't find the page you're looking for.
      </BTitle>
      <a href="/" class="not-found__back">
        Go back to home page
      </a>
    </div>
  </div>
</template>

<script>
import BTitle from '@/components/common/BTitle/index.vue';

export default {
  name: 'NotFound',

  components: {
    BTitle,
  },
};
</script>

<style lang="scss">

@import "@/scss/_variables.scss";

.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  padding: 2rem;
  text-align: center;

  &__title {
    margin-bottom: 2rem;
    color: $blue;
    font-size: 14.063rem;
    line-height: 14.063rem;
    text-align: center;
  }

  &__subtitle {
    margin: 0 auto 3rem;
    font-size: 3.125rem;
    max-width: 32rem;
  }

  &__back {
    text-decoration: underline;
    color: $blue;
  }
}

</style>
