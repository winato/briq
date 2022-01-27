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
        We are <span class="text-bold">{{ busy.day | calcPercents}}
        busy today</span> and <span class="text-bold">
        {{ busy.week | calcPercents }} this week</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import calcPercents from '../../../utils/calcPercents';

export default {
  name: 'Statistic',

  filters: {
    calcPercents,
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
      padding-right: .3rem;
      font-size: 1rem;
      letter-spacing: -1px;

      @media screen and (min-width: 992px) {
        font-size: 1.5rem;
      }

      &--busy {
        font-size: 1rem;
        letter-spacing: normal;

        @media screen and (min-width: 992px) {
          font-size: 1.125rem;
        }
      }
    }
  }
</style>
