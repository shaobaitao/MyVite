<template>
  <p>{{ count }}</p>
  <div class="container">
    <p></p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="less">
  @import './index.less';
</style>