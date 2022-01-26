export default {
  setAlertsList(state, payload) {
    Object.assign(state, {
      alertsList: payload.frontDeskAlerts,
    });
  },
  openModal(state, payload) {
    state.selectedAlert = payload;
    state.isModalOpen = true;
  },
  closeModal(state) {
    state.selectedAlert = null;
    state.isModalOpen = false;
  },
};
