import alertsServices from '@/api/alerts';
import flushPromises from 'flush-promises';

jest.mock('@/api/alerts');

describe('api/alerts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should get alerts', async () => {
    alertsServices.getAlerts.mockResolvedValueOnce();

    alertsServices.getAlerts();

    await flushPromises();

    expect(alertsServices.getAlerts).toHaveBeenCalledTimes(1);
  });

  it('Should create alert', async () => {
    const params = {
      bookingId: 1,
      reason: 'Some reason',
    };

    alertsServices.createAlert.mockResolvedValueOnce(params);

    alertsServices.createAlert(params);

    await flushPromises();

    expect(alertsServices.createAlert).toHaveBeenCalledTimes(1);
    expect(alertsServices.createAlert).toHaveBeenCalledWith({
      bookingId: 1,
      reason: 'Some reason',
    });
  });
});
