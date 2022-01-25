import api from '../../api';

export default {
  async createAlertAction({ dispatch }, id) {
    try {
      await api.createAlert(id);
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
