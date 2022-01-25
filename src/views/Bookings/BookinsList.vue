<template>
  <div class="bookings-list">
    <BookingItem v-for="item in 10" :key="item"/>
  </div>
</template>

<script>
import BookingItem from './BookingItem.vue';

export default {
  name: 'BookingsList',

  components: {
    BookingItem,
  },
};
</script>

<style lang="scss">
</style>
