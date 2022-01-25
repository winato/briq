import doRequest from './doRequest';

const getBookingsList = ({ params }) => doRequest({
  methods: 'GET',
  url: 'bookings',
  params,
});

const getBooking = ({ params }) => doRequest({
  methods: 'GET',
  url: 'stats',
  params,
});

export default { getBookingsList, getBooking };
