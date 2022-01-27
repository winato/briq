import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BookingInfo from '@/views/Booking/BookingInfo.vue';
import bookingMock from '../../../mocks/booking';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('BookingInfo.vue', () => {
  let state;
  let store;

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
  });

  it('Should render component', () => {
    const wrapper = shallowMount(BookingInfo, { store, localVue });

    expect(wrapper.exists()).toBe(true);
  });
});
