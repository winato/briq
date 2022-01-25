export default {
  setStatistic(state, payload) {
    const { madeThisDay, madeThisWeek } = payload.kpis.bookings;
    const { thisDay, thisWeek } = payload.kpis.howBusyIsItFactor;

    Object.assign(state, {
      success: true,
      bookings: {
        day: madeThisDay,
        week: madeThisWeek,
      },
      busy: {
        day: thisDay,
        week: thisWeek,
      },
    });
  },
};
