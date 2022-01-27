<template>
  <transition name="modal-fade">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      @click.self="close"
      v-if="isOpen"
    >
      <div class="modal__layout">
        <div class="modal__container">
          <div class="modal__header" id="modalTitle">
            <slot name="header"></slot>
            <img
              class="modal__close"
              src="../../../assets/close.svg"
              alt="close"
              aria-label="Close modal"
              @click="close"
            >
          </div>
          <div class="modal__body" id="modalDescription">
            <slot/>
          </div>
          <div class="modal__actions">
            <slot name="actions"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BModal',

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .1s ease;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 50%);

  &__layout {
    padding: 1rem;
  }

  &__body {
    display: flex;
  }

  &__container {
    position: relative;
    width: auto;
    max-width: 36rem;
    padding: 2rem 3rem;
    border-radius: 0.313rem;
    background-color: white;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__close {
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    cursor: pointer;
    opacity: .7;
    transition: opacity .1s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
