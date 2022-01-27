<template>
  <router-link :to="{ name: 'bookingItem', params: { id: id }}">
    <div class="booking-item">
      <div class="booking-item__column booking-item__column--name">
        <BTitle type="user-name" tag="h4">
          {{ name || '-' }}
        </BTitle>
      </div>
      <div class="booking-item__column booking-item__column--date">
        <time>
          {{ date | formatDate }}
        </time>
      </div>
      <div class="booking-item__column booking-item__column--time">
        <time>
          {{ time }}
        </time>
      </div>
      <div class="booking-item__column booking-item__column--people">
        {{ groupSize }} {{ groupTitle }}
      </div>
      <div class="booking-item__column booking-item__column--tags">
        <Tags :tags="deals"/>
      </div>
      <div class="booking-item__column booking-item__column--actions">
        <AlertButton :id="id"/>
      </div>
    </div>
  </router-link>
</template>

<script>
import Tags from '../../components/shared/Tags/index.vue';
import AlertButton from '../../components/features/Alerts/AlertButton.vue';
import timeMixin from '../../mixins/timeMixin';
import BTitle from '../../components/common/BTitle/index.vue';

export default {
  name: 'BookingItem',

  mixins: [timeMixin],

  components: {
    Tags,
    AlertButton,
    BTitle,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    groupSize: {
      type: Number,
      default: 0,
    },
    deals: {
      type: Array,
      required: true,
    },
  },

  computed: {
    groupTitle() {
      return this.groupSize === 1 ? 'person' : 'people';
    },
  },
};
</script>

<style lang="scss">

@import "@/scss/_variables.scss";

.booking-item {
  border-radius: 0.313rem;
  background-color: white;
  margin-bottom: 0.313rem;
  padding: 1.313rem 2.188rem;
  display: flex;
  position: relative;
  transition: all .1s ease-in-out;

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
    background-color: #F9F9F9;
    &:before {
      width: 0.938rem;
    }
  }

  &__column {
    display: flex;
    padding: .2rem;
    align-items: center;
    width: calc(2 / 12) * 100%;

    &--name {
      width: calc(2 / 12) * 100%;
    }

    &--tags {
      width: calc(3 / 12) * 100%;
    }

    &--time,
    &--people,
    &--date {
      color: $dark-gray;
      font-size: 0.875rem;
    }

    &--actions {
      justify-content: end;
      width: calc(1 / 12) * 100%;
    }
  }
}

</style>
