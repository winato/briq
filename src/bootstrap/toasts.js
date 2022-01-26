window.Vue.toasted.register('globalAppError', (payload) => payload.message || 'Something Went Wrong...', {
  type: 'error',
  position: 'bottom-right',
  duration: 3000,
});
