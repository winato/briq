<template>
  <textarea
    class="textarea"
    rows="5"
    :placeholder="placeholder"
    :value="value"
    @input="(e) => onChange(e.target.value)"
  />
</template>

<script>

export default {
  name: 'BTextarea',

  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Enter text here',
    },
  },

  methods: {
    onChange(string) {
      this.$emit('input', string);
    },
  },
};
</script>

<style lang="scss">
  @import "../../../scss/_variables.scss";

  .textarea {

    width: 100%;
    outline: none;
    border: 1px solid $dark-gray;
    border-radius: 0.313rem;
    margin-bottom: .5rem;
    padding: .5rem;
    resize: none;

  }

</style>
