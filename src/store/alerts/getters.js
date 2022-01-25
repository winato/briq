export default {
  alertsByBooking: (state) => (id) => state.alertsList.filter((alert) => alert.bookingId === id),
};
