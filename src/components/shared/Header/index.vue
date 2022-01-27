<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <router-link :to="{ name: 'bookings' }">
          <img src="../../../assets/logo.svg"/>
        </router-link>
        <Statistic/>
      </div>
    </div>
  </header>
</template>

<script>
import Statistic from '@/components/features/Statistic/index.vue';

export default {
  name: 'Header',

  components: {
    Statistic,
  },
};
</script>

<style lang="scss">

.header {
  padding: 19px 0;
  background-color: white;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

</style>
