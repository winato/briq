import doRequest from './doRequest';

const getBookingsList = (params) => doRequest({
  method: 'GET',
  url: '',
  params,
});

const getBooking = (id) => doRequest({
  method: 'GET',
  url: `/${id}`,
});

export default { getBookingsList, getBooking };
