import { shallowMount, mount } from '@vue/test-utils';
import BookingsList from '@/views/Bookings/BookingsList.vue';
import bookingsMock from '../../../mocks/bookings';

describe('BookingsList.vue', () => {
  it('Should render component', () => {
    const wrapper = shallowMount(BookingsList,
      {
        propsData: {
          bookings: bookingsMock,
        },
      });

    expect(wrapper.exists()).toBe(true);
  });

  it('Should display error message', () => {
    const wrapper = mount(BookingsList,
      {
        propsData: {
          bookings: [],
        },
      });

    const errorMessage = wrapper.find('.empty');

    expect(errorMessage.exists()).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });
});
