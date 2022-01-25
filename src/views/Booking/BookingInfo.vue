<template>
  <div class="booking-info">
    <p class="booking-info__id">
      {{ bookingData.id }}
    </p>
    <h2 class="booking-info__name">
      {{ bookingData.name }}
    </h2>
    <div class="booking-info__row">
      <div class="booking-info__column">
        <p class="booking-info__text">
          Date:
          <time class="text-bold">{{ bookingData.date }}</time>
        </p>
        <p class="booking-info__text">
          Time:
          <time class="text-bold">{{ bookingData.time }}</time>
        </p>
        <p class="booking-info__text">
          Group: <span class="text-bold">{{ bookingData.groupSize }}</span>
        </p>
      </div>
      <div class="booking-info__column">
        <Tags :tags="bookingData.deals"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tags from '../../components/shared/Tags/index.vue';

export default {
  name: 'BookingInfo',

  components: {
    Tags,
  },

  computed: {
    ...mapState('bookings', ['bookingData']),
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
