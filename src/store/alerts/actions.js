import api from '../../api';

export default {
  async createAlertAction({ dispatch }, payload) {
    try {
      await api.createAlert(payload);
      dispatch('getAlerts');
    } catch (error) {
      window.Vue.toasted.global.globalAppError({ message: error.message });
      throw new Error(error);
    }
  },

  async getAlerts({ commit }) {
    try {
      const { data } = await api.getAlerts();

      commit('setAlertsList', data);
    } catch (error) {
      window.Vue.toasted.global.globalAppError({ message: error.message });
      throw new Error(error);
    }
  },
};
