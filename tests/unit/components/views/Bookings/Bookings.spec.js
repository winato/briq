import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Bookings from '@/views/Bookings/index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Bookings.vue', () => {
  describe('methods', () => {
    let actions;
    let state;
    let store;

    beforeEach(() => {
      state = {
        bookings: [],
        successBookingsList: false,
      };

      actions = {
        getBookingsList: jest.fn(),
      };

      store = new Vuex.Store({
        modules: {
          bookings: {
            state,
            actions,
            namespaced: true,
          },
        },
      });
    });

    it('Should call getInitialData on created', async () => {
      const spy = jest.spyOn(Bookings.methods, 'getInitialData');
      shallowMount(Bookings, {
        store,
        localVue,
      });

      expect(spy).toHaveBeenCalled();
      expect(actions.getBookingsList).toHaveBeenCalled();
    });

    it('Should call getInitialData again after 60000ms', async () => {
      const spy = jest.spyOn(Bookings.methods, 'getInitialData');
      shallowMount(Bookings, {
        store,
        localVue,
      });

      expect(spy).toHaveBeenCalled();
      expect(actions.getBookingsList).toHaveBeenCalled();

      jest.runTimersToTime(60 * 1000);

      expect(spy).toHaveBeenCalled();
      expect(actions.getBookingsList).toHaveBeenCalled();
    });
  });
});
