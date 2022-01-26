import api from '../../api';

export default {
  async createAlertAction({ dispatch }, payload) {
    try {
      await api.createAlert(payload);
      dispatch('getAlerts');
    } catch (error) {
      throw new Error(error);
    }
  },

  async getAlerts({ commit }) {
    try {
      const { data } = await api.getAlerts();
      commit('setAlertsList', data);
    } catch (error) {
      throw new Error(error);
    }
  },
};
