<template>
  <div class="bookings">
    <div class="container">
      <Title tag="h1" type="main">
        Our Bookings
      </Title>
      <BookingsList
        :bookings="bookings"
        v-if="successBookingsList"
      />
      <Title
        tag="h4"
        type="empty"
        v-else
      >
        Something went wrong. Please try again later!
      </Title>
    </div>
    <AlertModal/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Title from '../../components/common/Title/index.vue';
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
    Title,
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
  padding: 4.375rem 0;
}
</style>
