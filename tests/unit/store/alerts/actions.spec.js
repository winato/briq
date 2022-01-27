import alertsServices from '@/api/alerts';
import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/alerts/actions';

Vue.use(Vuex);

jest.mock('@/api/alerts');

describe('alerts/actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createAlertAction', () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    it('Should set alerts list and success', async () => {
      alertsServices.getAlerts.mockResolvedValueOnce({ data: ['alert', 'alert-1'] });

      let alertsList = [];
      let success = false;

      const setAlertsList = (state, payload) => {
        alertsList = payload;
        success = true;
      };

      await actions.getAlerts({ commit: setAlertsList });

      expect(success).toBe(true);
      expect(alertsList).toEqual(['alert', 'alert-1']);
    });
  });

  describe('createAlertAction', () => {
    const store = new Vuex.Store();
    store.dispatch = jest.fn();

    it('Should create new alert', async () => {
      alertsServices.createAlert.mockResolvedValueOnce({ data: 'Success' });

      const getAlerts = jest.fn();

      await actions.createAlertAction({ dispatch: getAlerts });

      expect(getAlerts).toHaveBeenCalledTimes(1);
    });
  });
});
