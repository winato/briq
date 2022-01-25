<template>
  <div class="statistic">
    <div class="statistic__row">
      <div class="statistic__item">
        <span class="text-bold">42</span>
        bookings today
      </div>
      <div class="statistic__item">
        <span class="text-bold">187</span>
        booking this week
      </div>
      <div class="statistic__item statistic__item--busy">
        We are busy for
        <span class="text-bold">87% today</span>
        and for
        <span class="text-bold">73% this week</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
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
