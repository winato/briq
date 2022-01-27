import statisticServices from '@/api/statistic';
import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/statistic/actions';

Vue.use(Vuex);

jest.mock('@/api/statistic');

describe('statistic/actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getBookingsList', () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    it('Should get bookings list', async () => {
      statisticServices.getStatistic.mockResolvedValueOnce(
        {
          data: {
            bookings: {
              day: 1,
              week: 2,
            },
            busy: {
              day: 0.98,
              week: 0.87,
            },
          },
        },
      );

      let stat = {
        bookings: {
          day: 0,
          week: 0,
        },
        busy: {
          day: 0,
          week: 0,
        },
      };
      let success = false;

      const setStatistic = (state, payload) => {
        stat = payload;
        success = true;
      };

      await actions.getStatistic({ commit: setStatistic });

      expect(success).toBe(true);
      expect(stat).toEqual({
        bookings: {
          day: 1,
          week: 2,
        },
        busy: {
          day: 0.98,
          week: 0.87,
        },
      });
    });
  });
});
