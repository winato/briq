import mutations from '@/store/alerts/mutations';
import alertsMock from '../../mocks/alerts';

describe('alerts/mutations.js', () => {
  describe('setAlertsList', () => {
    it('Should set alerts list to state', () => {
      const state = {
        alertsList: [],
        selectedBooking: null,
        isModalOpen: false,
      };

      mutations.setAlertsList(state, alertsMock);

      expect(state).toEqual({
        alertsList: alertsMock.frontDeskAlerts,
        selectedBooking: null,
        isModalOpen: false,
      });
    });
  });

  describe('openModal', () => {
    it('Should open modal window', () => {
      const state = {
        alertsList: [],
        selectedBooking: null,
        isModalOpen: false,
      };

      mutations.openModal(state, 1);

      expect(state).toEqual({
        alertsList: [],
        selectedBooking: 1,
        isModalOpen: true,
      });
    });
  });

  describe('closeModal', () => {
    it('Should close modal window', () => {
      const state = {
        alertsList: [],
        selectedBooking: 1,
        isModalOpen: true,
      };

      mutations.closeModal(state);

      expect(state).toEqual({
        alertsList: [],
        selectedBooking: null,
        isModalOpen: false,
      });
    });
  });
});
