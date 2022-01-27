import flushPromises from 'flush-promises';
import bookingsServices from '@/api/bookings';

jest.mock('@/api/bookings');

describe('api/bookings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should get booking', async () => {
    bookingsServices.getBooking.mockResolvedValueOnce();

    bookingsServices.getBooking(5);

    await flushPromises();

    expect(bookingsServices.getBooking).toHaveBeenCalledTimes(1);
    expect(bookingsServices.getBooking).toHaveBeenLastCalledWith(5);
  });

  it('Should get bookings list', async () => {
    bookingsServices.getBookingsList.mockResolvedValueOnce();

    bookingsServices.getBookingsList({ limit: 10 });

    await flushPromises();

    expect(bookingsServices.getBookingsList).toHaveBeenCalledTimes(1);
    expect(bookingsServices.getBookingsList).toHaveBeenLastCalledWith({ limit: 10 });
  });
});
