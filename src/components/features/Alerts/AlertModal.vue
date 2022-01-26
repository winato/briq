<template>
  <Modal :is-open="isOpen" @close="isOpen = false">
    <template v-slot:header>
      <h1>Please add reason for notification</h1>
    </template>
    <template>
      <Textarea v-model="text"/>
    </template>
    <template  v-slot:actions>
      <Button @click="isOpen = false">Create</Button>
    </template>
  </Modal>
</template>

<script>

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
    isOpen: true,
    text: '',
  }),

};
</script>
