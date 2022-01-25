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
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BookingsList from './BookinsList.vue';

export default {
  name: 'Bookings',

  components: {
    BookingsList,
  },

  created() {
    this.getBookingsList({ limit: 15 });
  },

  computed: {
    ...mapState('bookings', ['bookings', 'successBookingsList']),
  },

  methods: {
    ...mapActions('bookings', ['getBookingsList']),
  },
};
</script>

<style lang="scss">

.bookings {
  padding: 70px 0;
}
</style>
