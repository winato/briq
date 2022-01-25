<template>
  <div class="booking">
    <div class="container">
      <h1 class="main-title">
        Booking
      </h1>
      <div class="booking__body">
        <BookingInfo v-if="successSingleBooking"/>
        <Alerts :alerts="alertsByBooking($router.history.current.params.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
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
    this.getAlerts();
  },

  computed: {
    ...mapGetters('alerts', ['alertsByBooking']),
    ...mapState('bookings', ['successSingleBooking']),
  },

  methods: {
    ...mapActions('bookings', ['getBooking']),
    ...mapActions('alerts', ['getAlerts']),
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
