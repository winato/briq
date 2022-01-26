export default {
  setAlertsList(state, payload) {
    Object.assign(state, {
      alertsList: payload.frontDeskAlerts,
    });
  },
  openModal(state, payload) {
    state.selectedBooking = payload;
    state.isModalOpen = true;
  },
  closeModal(state) {
    state.selectedBooking = null;
    state.isModalOpen = false;
  },
};
