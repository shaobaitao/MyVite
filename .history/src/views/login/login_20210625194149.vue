<template>
  <div class="container">
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default sr{
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