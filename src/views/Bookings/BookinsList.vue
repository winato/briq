<template>
  <div class="bookings-list">
    <BookingItem
      v-for="booking in bookings"
      :key="booking.id"
      v-bind="booking"
    />
    <Title
      tag="h4"
      type="empty"
      v-if="bookings.length === 0"
    >
      You have no bookings yet
    </Title>
  </div>
</template>

<script>
import BookingItem from './BookingItem.vue';
import Title from '../../components/common/Title/index.vue';

export default {
  name: 'BookingsList',

  components: {
    BookingItem,
    Title,
  },

  props: {
    bookings: {
      type: Array,
      required: true,
    },
  },
};
</script>
