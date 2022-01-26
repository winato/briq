<template>
  <div class="bookings">
    <div class="container">
      <h1 class="main-title">
        Our Bookings
      </h1>
      <BookingsList
        :bookings="bookings"
        v-if="successBookingsList"
      />
    </div>
    <AlertModal/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AlertModal from '../../components/features/Alerts/AlertModal.vue';
import BookingsList from './BookinsList.vue';

const INTERVAL = 60 * 1000;
const PER_PAGE = 10;

export default {
  name: 'Bookings',

  data: () => ({
    interval: null,
  }),

  components: {
    BookingsList,
    AlertModal,
  },

  created() {
    this.getInitialData();

    this.interval = setInterval(() => {
      this.getInitialData();
    }, INTERVAL);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    ...mapState('bookings', ['bookings', 'successBookingsList']),
  },

  methods: {
    ...mapActions('bookings', ['getBookingsList']),

    getInitialData() {
      this.getBookingsList({ limit: PER_PAGE });
    },
  },
};
</script>

<style lang="scss">

.bookings {
  padding: 70px 0;
}
</style>
