<template>
  <div class="tags">
    <TagItem
      v-for="tag in tags" :key="tag"
      :label="tag"
    />
  </div>
</template>

<script>
import TagItem from './TagItem.vue';

export default {
  name: 'Tags',

  props: {
    tags: {
      type: Array,
      required: true,
    },
  },

  components: {
    TagItem,
  },
};
</script>

<style lang="scss">

.tags {
  display: flex;
  flex-wrap: wrap;
}

</style>
