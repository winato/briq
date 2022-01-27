<template>
  <div class="booking-info">
    <div class="booking-info__header">
      <p class="booking-info__id">
        {{ bookingData.id }}
      </p>
      <AlertButton :id="bookingData.id"/>
    </div>
    <BTitle tag="h2" type="user-name" class="booking-info__name">
      {{ bookingData.name }}
    </BTitle>
    <div class="booking-info__row">
      <div class="booking-info__column">
        <p class="booking-info__text booking-info__text--date">
          Date: <time class="text-bold">{{ bookingData.date | formatDate }}</time>
        </p>
        <p class="booking-info__text booking-info__text--time">
          Time: <time class="text-bold">{{ bookingData.time }}</time>
        </p>
        <p class="booking-info__text booking-info__text--group">
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
import Tags from '@/components/shared/Tags/index.vue';
import AlertButton from '@/components/features/Alerts/AlertButton.vue';
import timeMixin from '@/mixins/timeMixin';
import BTitle from '@/components/common/BTitle/index.vue';

export default {
  name: 'BookingInfo',

  mixins: [timeMixin],

  components: {
    Tags,
    BTitle,
    AlertButton,
  },

  computed: {
    ...mapState('bookings', ['bookingData']),
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.booking-info {
  padding: 1.25rem 4.375rem 2.5rem;
  background-color: white;
  border-radius: 0.313rem;
  font-size: 0.875rem;
  margin-bottom: 2rem;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
