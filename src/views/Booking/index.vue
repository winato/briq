<template>
  <div class="booking">
    <div class="container">
      <Title type="main" tag="h1">
        Booking
      </Title>
      <div class="booking__body">
        <BookingInfo v-if="successSingleBooking"/>
        <Title
          tag="h4"
          type="empty"
          v-else
        >
          Something went wrong. Please try again later!
        </Title>
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
import Title from '../../components/common/Title/index.vue';

export default {
  name: 'Booking',

  components: {
    BookingInfo,
    Alerts,
    AlertModal,
    Title,
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
    @media screen and (min-width: 992px) {
      max-width: 66%;
    }
  }
}
</style>
