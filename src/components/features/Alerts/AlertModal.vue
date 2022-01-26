<template>
  <BModal :is-open="isModalOpen" @close="close">
    <template v-slot:header>
      <BTitle tag="h2">Please add reason for notification</BTitle>
    </template>
    <template>
      <BTextarea v-model="text"/>
    </template>
    <template  v-slot:actions>
      <BButton @click="createAlert">Create</BButton>
    </template>
  </BModal>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import BModal from '../../common/BModal/index.vue';
import BTextarea from '../../common/BTextarea/index.vue';
import BButton from '../../common/BButton/index.vue';
import BTitle from '../../common/BTitle/index.vue';

export default {
  name: 'AlertModal',

  components: {
    BModal,
    BTextarea,
    BButton,
    BTitle,
  },

  data: () => ({
    text: '',
  }),

  computed: {
    ...mapState('alerts', ['isModalOpen', 'selectedAlert']),
  },

  methods: {
    ...mapMutations('alerts', ['closeModal']),
    ...mapActions('alerts', ['createAlertAction']),

    async createAlert() {
      await this.createAlertAction({
        reason: this.text,
        id: this.selectedAlert,
      });
      this.close();
    },

    close() {
      this.text = '';
      this.closeModal();
    },
  },

};
</script>
