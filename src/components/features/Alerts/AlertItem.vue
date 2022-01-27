<template>
  <div class="alert-item">
    <div class="alert-item__group">
      <img class="alert-item__icon" src="../../../assets/alert-white.svg" alt="">
      <p class="alert-item__text">
        {{ reason }}
      </p>
    </div>
    <time>
      {{ timestamp | formatFullDate }}
    </time>
  </div>
</template>

<script>
import timeMixin from '../../../mixins/timeMixin';

export default {
  name: 'AlertItem',

  mixins: [timeMixin],

  props: {
    reason: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">

@import "@/scss/_variables.scss";

.alert-item {
  background-color: $orange;
  border-radius: 0.313rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem 5rem 1.125rem 1.375rem;
  color: white;
  margin-bottom: 0.313rem;

  &__text {
    margin: 0;
  }

  &__icon {
    margin-right: 1.875rem;
  }

  &__group {
    display: flex;
    align-items: center;
  }
}

</style>
