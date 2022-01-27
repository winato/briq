import { shallowMount, mount } from '@vue/test-utils';
import BookingItem from '@/views/Bookings/BookingItem.vue';
import BookingMock from '../../../mocks/booking';

describe('BookingItem.vue', () => {
  describe('computed', () => {
    describe('groupTitle', () => {
      it('Should show "people"', () => {
        const wrapper = shallowMount(BookingItem, {
          propsData: BookingMock,
          stubs: ['router-link'],
        });
        expect(wrapper.vm.groupTitle).toBe('people');
      });

      it('Should show "person"', () => {
        const wrapper = shallowMount(BookingItem, {
          propsData: {
            ...BookingMock,
            groupSize: 1,
          },
          stubs: ['router-link'],
        });
        expect(wrapper.vm.groupTitle).toBe('person');
      });
    });
  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(BookingItem, {
        propsData: BookingMock,
        stubs: ['router-link'],
      });
    });

    it('Should render name', () => {
      const name = wrapper.find('.user-name');

      expect(name.exists()).toBe(true);
    });

    it('Should render date', () => {
      const date = wrapper.find('.booking-item__column--date');

      expect(date.exists()).toBe(true);
      expect(date.text()).toBe('05.08.2021');
    });

    it('Should render time', () => {
      const time = wrapper.find('.booking-item__column--time');

      expect(time.exists()).toBe(true);
      expect(time.text()).toBe('19:00');
    });

    it('Should render size of group with right label', () => {
      const groupSize = wrapper.find('.booking-item__column--people');

      expect(groupSize.exists()).toBe(true);
      expect(groupSize.text()).toBe('5 people');
    });

    it('Should render actions column', () => {
      const actions = wrapper.find('.booking-item__column--actions');

      expect(actions.exists()).toBe(true);
    });
  });
});
