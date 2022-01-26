import api from '../../api';

export default {
  async getStatistic({ commit }) {
    try {
      const { data } = await api.getStatistic();
      commit('setStatistic', data);
    } catch (error) {
      window.Vue.toasted.global.globalAppError({ message: error.message });
      throw new Error(error);
    }
  },
};
