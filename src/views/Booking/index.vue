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
import { mapActions } from 'vuex';
import BookingInfo from './BookingInfo.vue';
import Alerts from '../../components/features/Alerts/index.vue';

export default {
  name: 'Booking',

  components: {
    BookingInfo,
    Alerts,
  },

  created() {
    this.getBooking(this.$router.history.current.params.id);
  },

  methods: {
    ...mapActions('bookings', ['getBooking']),
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
