<template>
  <router-link :to="{ name: 'bookingItem', params: { id: 1 }}">
    <div class="booking-item">
      <div class="booking-item__column booking-item__column--name">
        Adam Smit
      </div>
      <div class="booking-item__column booking-item__column--date">
        <time>
          2021-08-13
        </time>
      </div>
      <div class="booking-item__column booking-item__column--time">
        <time>
          17:30
        </time>
      </div>
      <div class="booking-item__column booking-item__column--people">
        6 people
      </div>
      <div class="booking-item__column">
        <Tags/>
      </div>
      <div class="booking-item__column booking-item__column--actions">
        <div class="booking-item__action-button">
          <img src="../../assets/alert.svg" alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Tags from '../../components/shared/Tags/index.vue';

export default {
  name: 'BookingItem',

  components: {
    Tags,
  },
};
</script>

<style lang="scss">
@import "../../scss/_variables.scss";

.booking-item {
  border-radius: 0.313rem;
  background-color: white;
  margin-bottom: 0.313rem;
  padding: 1.313rem 2.188rem;
  display: flex;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: $green;
    border-radius: 0.313rem 0 0 0.313rem;
    transition: width .1s ease-in-out;
  }

  &:hover {
    &:before {
      width: 15px;
    }
  }

  &__column {
    display: flex;
    align-items: center;
    width: 16.6%;

    &--name {
      font-weight: bold;
      font-size: 1.5rem;
    }

    &--time,
    &--people,
    &--date {
      color: $dark-gray;
      font-size: 14px;
    }

    &--actions {
      justify-content: end;
    }
  }

  &__action-button {
    cursor: pointer;
  }
}

</style>
