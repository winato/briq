import doRequest from './doRequest';

const getBookingsList = (params) => doRequest({
  methods: 'GET',
  url: '',
  params,
});

const getBooking = (id) => doRequest({
  methods: 'GET',
  url: `/${id}`,
});

export default { getBookingsList, getBooking };
