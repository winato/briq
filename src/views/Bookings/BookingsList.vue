<template>
  <div class="bookings-list">
    <BookingItem
      v-for="booking in bookings"
      :key="booking.id"
      v-bind="booking"
    />
    <BTitle
      tag="h4"
      type="empty"
      v-if="bookings.length === 0"
    >
      You have no bookings yet
    </BTitle>
  </div>
</template>

<script>
import BTitle from '@/components/common/BTitle/index.vue';
import BookingItem from './BookingItem.vue';

export default {
  name: 'BookingsList',

  components: {
    BookingItem,
    BTitle,
  },

  props: {
    bookings: {
      type: Array,
      required: true,
    },
  },
};
</script>
