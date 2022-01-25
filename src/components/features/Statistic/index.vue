<template>
  <div class="statistic">
    <div
      class="statistic__row"
      v-if="success"
    >
      <div class="statistic__item">
        <span class="text-bold">{{ bookings.day }}</span>
        bookings today
      </div>
      <div class="statistic__item">
        <span class="text-bold">{{ bookings.week }}</span>
        booking this week
      </div>
      <div class="statistic__item statistic__item--busy">
        We are busy for
        <span class="text-bold">{{ busy.day | createPercents}} today</span>
        and for
        <span class="text-bold">{{ busy.week | createPercents }} this week</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Statistic',

  filters: {
    createPercents(amount) {
      return `${amount * 100}%`;
    },
  },

  created() {
    this.getStatistic();
  },

  computed: {
    ...mapState('statistic', ['bookings', 'busy', 'success']),
  },

  methods: {
    ...mapActions('statistic', ['getStatistic']),
  },
};
</script>

<style lang="scss">
  .statistic {
    width: 75%;
    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__item {
      font-size: 1.5rem;
      letter-spacing: -1px;

      &--busy {
        font-size: 1.125rem;
        letter-spacing: normal;
      }
    }
  }
</style>
