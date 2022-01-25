export default {
  setAlertsList(state, payload) {
    Object.assign(state, {
      alertsList: payload.frontDeskAlerts,
    });
  },
};
