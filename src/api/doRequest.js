import axios from 'axios';
import BASE_API_URL from '../config/constants';

axios.interceptors.response.use((response) => response, (error) => {
  window.Vue.toasted.global.globalAppError({ message: error.message });
  Promise.reject(error);
});

const doRequest = ({
  method,
  data,
  params,
  url,
}) => axios({
  method,
  data,
  params,
  url: `${BASE_API_URL}${url}`,
});

export default doRequest;
