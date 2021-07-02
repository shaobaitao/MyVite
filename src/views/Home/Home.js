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
      color:''
    };
  },
  methods: {
    changeLaguages () {
      console.log(this.$i18n.locale)
   
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    },
    changeThemeColor(val){
      if(localStorage.colorTheme){
        console.log(1);
        localStorage.colorTheme=localStorage.colorTheme=="light-theme"?"dark-theme":"light-theme"
        // document.getElementById("app").className = localStorage.colorTheme;
      }else{
        console.log(2);
        localStorage.setItem("colorTheme", "light-theme")
      }
      document.getElementById("app").className = localStorage.colorTheme;
    },
    toTest(){
      this.$router.push('/test')
    },
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