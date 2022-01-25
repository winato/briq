export default {
  setBookingsList(state, payload) {
    Object.assign(state, {
      bookings: payload,
      successBookingsList: true,
    });
  },
  setBookingData(state, payload) {
    Object.assign(state, {
      bookingData: payload,
      successSingleBooking: true,
    });
  },
};
