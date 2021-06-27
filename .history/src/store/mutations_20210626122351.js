let mutations = {
    increment (state) {
        state.count++
    },
    changeThemeColor(state,val){
        state.themeColor = val;
    }
}
export default mutations