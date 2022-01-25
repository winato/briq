<template>
  <div class="booking">
    <div class="container">
      <h1 class="main-title">
        Booking
      </h1>
      <BookingInfo/>
    </div>
  </div>
</template>

<script>
import BookingInfo from './BookingInfo.vue';

export default {
  name: 'Booking',

  components: {
    BookingInfo,
  },
};
</script>

<style lang="scss">

.booking {
  padding: 70px 0;
}
</style>
