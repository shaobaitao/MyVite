import api from "../../api/systemInfo";
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
    toTest(){
      this.router.push()
    }
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