import mutations from '@/store/statistic/mutations';
import statMock from '../../mocks/stat';

describe('statistic/mutations.js', () => {
  it('Should set stat to state', () => {
    const state = {
      success: false,
      bookings: {
        day: 0,
        week: 0,
      },
      busy: {
        day: 0,
        week: 0,
      },
    };

    mutations.setStatistic(state, statMock);

    expect(state).toEqual({
      success: true,
      bookings: {
        day: 42,
        week: 187,
      },
      busy: {
        day: 0.83,
        week: 0.73,
      },
    });
  });
});
