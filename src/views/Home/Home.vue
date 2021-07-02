<template>
  <!-- <el-color-picker v-model="color" @change="changeThemeColor"></el-color-picker>  -->
  <!-- <el-button type="primary" icon="el-icon-edit" circle></el-button> -->
  <el-card class="languageTest">
    <p>{{ $t("title") }}</p>
    <van-button icon="plus" type="primary" @click="changeLaguages()" />
  </el-card>

  <el-card class="vuexTest">
    <h2>{{ count }}</h2>
    <van-button icon="good-job-o" type="primary" @click="testVuex"
      >Vuex测试</van-button
    >
  </el-card>
  <el-card class="axiosTest">
    <van-button icon="plus" type="primary" @click="getSBT" />
    <van-button icon="search" type="primary" @click="toTest" />

    <van-button loading type="primary" loading-text="加载中..." />
  </el-card>
  <el-card class="colorTest">
    <div class="content">
      <h2>颜色切换测试</h2>
      <van-button icon="plus" @click="changeThemeColor">点我切换</van-button>
    </div>
  </el-card>
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

<script src="./Home.js"/>

<style lang="less">
@import "./Home.less";
</style>