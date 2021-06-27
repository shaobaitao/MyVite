<template>
  <p>Home</p>
  <h2>{{ count }}</h2>
  <el-button
    type="primary"
    icon="el-icon-edit"
    circle
    @click="getSBT"
  ></el-button>
  <el-button
    type="primary"
    icon="el-icon-edit"
    circle
    @click="getHotSearch"
  ></el-button>
  <el-button
    type="primary"
    icon="el-icon-edit"
    circle
    @click="testVuex"
  ></el-button>
  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
  </el-date-picker>
  <van-button loading type="primary" loading-text="加载中..." />
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

export default {
  setup() {
    const show = ref(true);
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
</style>