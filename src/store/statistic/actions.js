import api from '@/api';

export default {
  async getStatistic({ commit }) {
    try {
      const { data } = await api.getStatistic();
      commit('setStatistic', data);
    } catch (error) {
      throw new Error(error);
    }
  },
};
