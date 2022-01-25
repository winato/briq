import doRequest from './doRequest';

const createAlert = (id) => doRequest({
  method: 'POST',
  url: '/front-desk-alert',
  data: { bookingId: id },
});

const getAlerts = () => doRequest({
  method: 'GET',
  url: '/front-desk-alert',
});

export default { getAlerts, createAlert };
