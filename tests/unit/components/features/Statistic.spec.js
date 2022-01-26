import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import statisticModule from '@/store/statistic';
import Statistic from '@/components/features/Statistic/index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('MyComponent.vue', () => {
  describe('created', () => {
    let actions;
    let store;

    beforeEach(() => {
      actions = {
        getStatistic: jest.fn(),
      };

      store = new Vuex.Store({
        modules: {
          statistic: {
            state: statisticModule.state,
            actions,
            namespaced: true,
          },
        },
      });
    });

    it('calls store action "moduleActionClick" when button is clicked', () => {
      shallowMount(Statistic, { store, localVue });
      expect(actions.getStatistic).toHaveBeenCalled();
    });
  });
});
