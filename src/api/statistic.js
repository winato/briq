import doRequest from './doRequest';

const getStatistic = () => doRequest({
  methods: 'GET',
  url: '/stats',
});

export default { getStatistic };
