<template>
  <div class="bookings-list">
    <BookingItem
      v-for="booking in bookings"
      :key="booking.id"
      v-bind="booking"
    />
    <h4
      class="bookings-list__empty"
      v-if="bookings.length === 0"
    >
      You have no bookings  yet
    </h4>
  </div>
</template>

<script>
import BookingItem from './BookingItem.vue';

export default {
  name: 'BookingsList',

  components: {
    BookingItem,
  },

  props: {
    bookings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.bookings-list {
  &__empty {
    text-align: center;
    color: $dark-gray;
  }
}
</style>
