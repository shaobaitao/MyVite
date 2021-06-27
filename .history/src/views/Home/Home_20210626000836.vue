<template>
  <p>{{}}</p>
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

<script src="./Home.js"/>

<style lang="less">
@import './Home.less';
</style>