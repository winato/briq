import Vue from 'vue';
import Vuex from 'vuex';
import statistic from './statistic/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    statistic,
  },
  strict: debug,
});

export default store;
