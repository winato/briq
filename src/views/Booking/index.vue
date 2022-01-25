<template>
  <div class="booking">
    <div class="container">
      <h1 class="main-title">
        Booking
      </h1>
      <div class="booking__body">
        <BookingInfo/>
        <Alerts/>
      </div>
    </div>
  </div>
</template>

<script>
import BookingInfo from './BookingInfo.vue';
import Alerts from '../../components/shared/Alerts/index.vue';

export default {
  name: 'Booking',

  components: {
    BookingInfo,
    Alerts,
  },
};
</script>

<style lang="scss">

.booking {
  padding: 70px 0;

  &__body {
    max-width: 66%;
  }
}
</style>
