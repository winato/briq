import getters from '@/store/alerts/getters';
import alertMocks from '../../mocks/alerts';

describe('alerts/getters', () => {
  describe('alertsByBooking', () => {
    it('Should find one alert for booking by id', () => {
      const state = {
        alertsList: alertMocks.frontDeskAlerts,
      };

      const data = getters.alertsByBooking(state)(1);

      expect(data).toEqual([
        {
          bookingId: 1,
          reason: 'No reason provided, but please review this booking.',
          timestamp: '2022-01-26T13:11:17.432Z',
        },
      ]);
    });

    it('Should find two alert for booking by id', () => {
      const state = {
        alertsList: alertMocks.frontDeskAlerts,
      };

      const data = getters.alertsByBooking(state)(2);

      expect(data).toEqual([
        {
          bookingId: 2,
          reason: 'No reason provided, but please review this booking.',
          timestamp: '2022-01-26T13:10:35.467Z',
        },
        {
          bookingId: 2,
          reason: 'No reason provided, but please review this booking.',
          timestamp: '2022-01-26T13:10:35.467Z',
        },
      ]);
    });

    it("Shouldn't find any alert for booking by id", () => {
      const state = {
        alertsList: alertMocks.frontDeskAlerts,
      };

      const data = getters.alertsByBooking(state)(3);

      expect(data).toEqual([]);
    });
  });
});
