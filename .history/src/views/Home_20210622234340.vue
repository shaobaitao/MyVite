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
</template>

<script>
import api from '../api/systemInfo'
export default {
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