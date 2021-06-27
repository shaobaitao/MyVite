<template>
  <p>Home</p>
  <h2>{{ count }}</h2>
  <div id="btns">
    <van-button icon="plus" type="primary" @click="getSBT" />
    <van-button icon="good-job-o" type="primary" @click="getHotSearch" />
    <van-button icon="search" type="primary" @click="testVuex" />
    <van-button loading type="primary" loading-text="加载中..." />
  </div>
  <div>
    <van-cell plain type="primary" @touchstart.stop="show = true">
      弹出带标题的键盘
    </van-cell>
    <van-number-keyboard
      :show="show"
      title="键盘标题"
      extra-key="."
      close-button-text="完成"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import api from "../api/systemInfo";
import { ref } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const show = ref(false);
    const onInput = (value) => Toast(value);
    const onDelete = () => Toast("删除");

    return {
      show,
      onInput,
      onDelete,
    };
  },
  data() {
    return {
      value1: "",
    };
  },
  methods: {
    testVuex() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      // this.$message.success(this.$store.state.count)
    },
    getSBT() {
      api.login().then((response) => {
        console.log(response.data);
      });
    },
    getHotSearch() {
      api.getHotSearch().then((response) => {
        console.log(response.data);
      });
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
  #btns{
    display: flex;
    justify-content: space-between;
    padding: 0 20vw;
  }
  .van-button{
    margin: ;
  }
</style>