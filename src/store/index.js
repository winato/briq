import Vue from 'vue';
import Vuex from 'vuex';
import statistic from './statistic';
import bookings from './bookings';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    statistic,
    bookings,
  },
  strict: debug,
});

export default store;
