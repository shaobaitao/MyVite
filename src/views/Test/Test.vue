<template>
  <div class="content">
    <span>{{  $t('title') }}</span>

    <span @click="changeLaguages()">切换语言</span>
    <!-- <span v-if="lang==='zh'"  @click="changezh" style="display:block" class="color">中文</span> -->
    <!-- <span v-else ="lang==='en'" @click="changeen" style="display:block">english</span> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: 'zh'
    }
  },
  methods: {
    changeLaguages () {
      console.log(this.$i18n.locale)
   
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>