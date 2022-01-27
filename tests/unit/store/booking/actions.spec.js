import bookingsServices from '@/api/bookings';
import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/bookings/actions';
import bookingsMock from '../../mocks/bookings';
import bookingMock from '../../mocks/booking';

Vue.use(Vuex);

jest.mock('@/api/bookings');

describe('bookings/actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getBookingsList', () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    it('Should get bookings list', async () => {
      bookingsServices.getBookingsList.mockResolvedValueOnce({ data: bookingsMock });

      let bookings = [];
      let success = false;

      const setBookingsList = (state, payload) => {
        bookings = payload;
        success = true;
      };

      await actions.getBookingsList({ commit: setBookingsList });

      expect(success).toBe(true);
      expect(bookings).toEqual(bookingsMock);
    });
  });

  it('Should get booking item', async () => {
    bookingsServices.getBookingsList.mockResolvedValueOnce({ data: bookingMock });

    let bookingData = null;
    let success = false;

    const setBookingData = (state, payload) => {
      bookingData = payload;
      success = true;
    };

    await actions.getBookingsList({ commit: setBookingData });

    expect(success).toBe(true);
    expect(bookingData).toEqual(bookingMock);
  });
});
