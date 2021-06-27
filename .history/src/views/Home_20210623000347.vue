<template>
    <p>Home</p>
    <h2>{{count}}</h2>
    <el-button type="primary" icon="el-icon-edit" circle @click="getSBT"></el-button>
    <el-button type="primary" icon="el-icon-edit" circle @click="getHotSearch"></el-button>
    <el-button type="primary" icon="el-icon-edit" circle @click="testVuex"></el-button>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    <van-button loading type="primary" loading-text="加载中..." />
</template>

<script>
import api from '../api/systemInfo'
import Button from 'vant/es/button';
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import 'vant/es/button/style';
export default {
    data() {
        return {
            value1:"",
        }
    },
    methods:{
        testVuex(){
            this.$store.commit('increment')
            console.log(this.$store.state.count);
            // this.$message.success(this.$store.state.count)
        },
        getSBT(){
            api.login()
            .then(response => {
                console.log(response.data);
            })
        },
        getHotSearch(){
            api.getHotSearch()
            .then(response => {
                console.log(response.data);
            })
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        }
    }
}
</script>

<style>

</style>