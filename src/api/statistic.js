import doRequest from './doRequest';

const getStatistic = () => doRequest({
  method: 'GET',
  url: '/stats',
});

export default { getStatistic };
