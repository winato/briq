import dayjs from 'dayjs';

export default {
  filters: {
    formatFullDate(date) {
      return dayjs(date).format('DD.MM.YYYY HH:MM');
    },
    formatDate(date) {
      return dayjs(date).format('DD.MM.YYYY');
    },
  },
};
