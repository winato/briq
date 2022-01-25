import Vue from 'vue';
import VueRouter from 'vue-router';
import Bookings from '../views/Bookings/index.vue';
import Booking from '../views/Booking/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'bookings',
    component: Bookings,
  },
  {
    path: '/booking/:id',
    name: 'bookingItem',
    component: Booking,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
