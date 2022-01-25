<template>
  <div class="bookings">
    <div class="container">
      <h1 class="main-title">
        Our Bookings
      </h1>
      <BookingsList />
    </div>
  </div>
</template>

<script>
import BookingsList from './BookinsList.vue';

export default {
  name: 'Bookings',

  components: {
    BookingsList,
  },
};
</script>

<style lang="scss">

.bookings {
  padding: 70px 0;
}
</style>
