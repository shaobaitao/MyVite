import axios from "axios";

const api = {
    login(data) {
        return axios.post('api/alumnibook/index.php', data).then(res => res)
    },
    test(data) {
        return axios.post('http://shaobaitao.cn/api/alumnibook/index.php', data).then(res => res)
    },
    getHotSearch(data) {
        return axios.post('ajax/side/hotSearch', data).then(res => res)
    },
    getData (data) {
        return axios({
          method: 'GET',
          url: `/api/alumnibook/index.php`,
          params: data
        })
    }
}
export default api