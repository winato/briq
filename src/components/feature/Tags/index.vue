<template>
  <div class="tags">
    <TagItem/>
  </div>
</template>

<script>
import TagItem from './TagItem.vue';

export default {
  name: 'Tags',

  components: {
    TagItem,
  },
};
</script>

<style lang="scss">
  .tags {
    display: flex;
  }
</style>
