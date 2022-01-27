import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BookingInfo from '@/views/Booking/BookingInfo.vue';
import bookingMock from '../../../mocks/booking';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('BookingInfo.vue', () => {
  describe('render', () => {
    let state;
    let store;
    let wrapper;

    beforeEach(() => {
      state = {
        bookingData: bookingMock,
      };

      store = new Vuex.Store({
        modules: {
          bookings: {
            state,
            namespaced: true,
          },
        },
      });

      wrapper = mount(BookingInfo, {
        store,
        localVue,
        stubs: ['router-link'],
      });
    });

    it('Should render component', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('Should render id', () => {
      const name = wrapper.find('.booking-info__id');

      expect(name.exists()).toBe(true);
      expect(name.text()).toBe('e4ad7321-434c-46a8-9f04-9a87ef34a651');
    });

    it('Should render name', () => {
      const name = wrapper.find('.user-name');

      expect(name.exists()).toBe(true);
      expect(name.text()).toBe('Fam. de Vries');
    });

    it('Should render date', () => {
      const name = wrapper.find('.booking-info__text--date');

      expect(name.exists()).toBe(true);
      expect(name.text()).toBe('Date: 05.08.2021');
    });

    it('Should render time', () => {
      const name = wrapper.find('.booking-info__text--time');

      expect(name.exists()).toBe(true);
      expect(name.text()).toBe('Time: 19:00');
    });

    it('Should render group size', () => {
      const name = wrapper.find('.booking-info__text--group');

      expect(name.exists()).toBe(true);
      expect(name.text()).toBe('Group: 5');
    });
  });
});
