<template>
  <div class="booking">
    <div class="container">
      <BTitle type="main" tag="h1">
        Booking
      </BTitle>
      <div class="booking__body">
        <BookingInfo v-if="successSingleBooking"/>
        <BTitle
          tag="h4"
          type="empty"
          v-else
        >
          Something went wrong. Please try again later!
        </BTitle>
        <Alerts :alerts="alertsByBooking($router.history.current.params.id)"/>
      </div>
      <AlertModal/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import BookingInfo from './BookingInfo.vue';
import Alerts from '../../components/features/Alerts/index.vue';
import AlertModal from '../../components/features/Alerts/AlertModal.vue';
import BTitle from '../../components/common/BTitle/index.vue';

export default {
  name: 'Booking',

  components: {
    BookingInfo,
    Alerts,
    AlertModal,
    BTitle,
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
  padding: 4.375rem 0;

  &__body {
    @media screen and (min-width: 992px) {
      max-width: 66%;
    }
  }
}
</style>
