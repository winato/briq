<template>
  <div class="not-found">
    <div class="container">
      <h1 class="not-found__title">
        Ooops!
      </h1>
      <h4 class="not-found__subtitle">
        We can't find the page you're looking for.
      </h4>
      <a href="/" class="not-found__back">
        Go back to home page
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 30rem;
  padding: 2rem;

  &__title {
    color: $blue;
    font-size: 225px;
    line-height: 225px;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__subtitle {
    font-size: 50px;
    max-width: 32rem;
    margin: 0 auto 3rem;
  }

  &__back {
    text-decoration: underline;
    color: $blue;
  }
}
</style>
