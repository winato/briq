import api from '@/api';

export default {
  async getBookingsList({ commit }, params) {
    try {
      const { data } = await api.getBookingsList(params);
      commit('setBookingsList', data);
    } catch (error) {
      throw new Error(error);
    }
  },

  async getBooking({ commit }, id) {
    try {
      const { data } = await api.getBooking(id);
      commit('setBookingData', data);
    } catch (error) {
      throw new Error(error);
    }
  },
};
