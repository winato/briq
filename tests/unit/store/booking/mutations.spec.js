import mutations from '@/store/bookings/mutations';
import bookingsMock from '../../mocks/bookings';
import bookingMock from '../../mocks/booking';

describe('bookings/mutations.js', () => {
  describe('setBookingsList', () => {
    it('Should set bookings list to state', () => {
      const state = {
        successBookingsList: false,
        successSingleBooking: false,
        bookings: [],
        bookingData: {
          bookedAt: '',
          date: '',
          deals: [],
          groupSize: 0,
          id: '',
          name: '',
          time: '',
        },
      };

      mutations.setBookingsList(state, bookingsMock);

      expect(state).toEqual({
        successBookingsList: true,
        successSingleBooking: false,
        bookings: bookingsMock,
        bookingData: {
          bookedAt: '',
          date: '',
          deals: [],
          groupSize: 0,
          id: '',
          name: '',
          time: '',
        },
      });
    });
  });

  describe('setBookingData', () => {
    it('Should set single booking to state', () => {
      const state = {
        successBookingsList: false,
        successSingleBooking: false,
        bookings: [],
        bookingData: {
          bookedAt: '',
          date: '',
          deals: [],
          groupSize: 0,
          id: '',
          name: '',
          time: '',
        },
      };

      mutations.setBookingData(state, bookingMock);

      expect(state).toEqual({
        successBookingsList: false,
        successSingleBooking: true,
        bookings: [],
        bookingData: bookingMock,
      });
    });
  });

  describe('setBookingData and setBookingsList', () => {
    it('Should set single booking to state', () => {
      const state = {
        successBookingsList: false,
        successSingleBooking: false,
        bookings: [],
        bookingData: {
          bookedAt: '',
          date: '',
          deals: [],
          groupSize: 0,
          id: '',
          name: '',
          time: '',
        },
      };

      mutations.setBookingData(state, bookingMock);
      mutations.setBookingsList(state, bookingsMock);

      expect(state).toEqual({
        successBookingsList: true,
        successSingleBooking: true,
        bookings: bookingsMock,
        bookingData: bookingMock,
      });
    });
  });
});
