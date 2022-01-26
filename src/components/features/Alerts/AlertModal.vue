<template>
  <Modal :is-open="isModalOpen" @close="closeModal">
    <template v-slot:header>
      <h1>Please add reason for notification</h1>
    </template>
    <template>
      <Textarea v-model="text"/>
    </template>
    <template  v-slot:actions>
      <Button @click="createAlert">Create</Button>
    </template>
  </Modal>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import Modal from '../../common/Modal/index.vue';
import Textarea from '../../common/Textarea/index.vue';
import Button from '../../common/Button/index.vue';

export default {
  name: 'AlertModal',

  components: {
    Modal,
    Textarea,
    Button,
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
      this.closeModal();
    },
  },

};
</script>
