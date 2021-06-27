<template>
  <div class="container">
    <p>{{ count }}</p>
  </div>
</template>

<script src="./L">
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="less">
  @import './login.less';
</style>