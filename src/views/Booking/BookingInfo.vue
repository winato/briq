<template>
  <div class="booking-info">
    <p class="booking-info__id">
      31e9ee33-40cb-44bb-b98b-fc95ebef55ad
    </p>
    <h2 class="booking-info__name">
      Adam Smith
    </h2>
    <div class="booking-info__row">
      <div class="booking-info__column">
        <p class="booking-info__text">
          Date:
          <time class="text-bold">2021-08-13</time>
        </p>
        <p class="booking-info__text">
          Time:
          <time class="text-bold">17:30</time>
        </p>
        <p class="booking-info__text">
          Group: <span class="text-bold">78</span>
        </p>
      </div>
      <div class="booking-info__column">
        <Tags/>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '../../components/shared/Tags/index.vue';

export default {
  name: 'BookingInfo',

  components: {
    Tags,
  },
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.booking-info {
  padding: 1.25rem 4.375rem 2.5rem;
  background-color: white;
  border-radius: 0.313rem;
  font-size: 14px;
  margin-bottom: 4.375rem;

  &__id {
    color: $dark-gray;
    font-size: 0.75rem;
    margin-bottom: 1.25rem;
  }

  &__name {
    margin: 0 0 1.875rem;
  }

  &__row {
    display: flex;
  }

  &__column {
    width: 50%;
  }

  &__text {
    margin: 0.813rem 0;
  }
}
</style>
