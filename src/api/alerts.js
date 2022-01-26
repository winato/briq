import doRequest from './doRequest';

const createAlert = ({ id, reason }) => doRequest({
  method: 'POST',
  url: '/front-desk-alert',
  data: { bookingId: id, reason },
});

const getAlerts = () => doRequest({
  method: 'GET',
  url: '/front-desk-alert',
});

export default { getAlerts, createAlert };
