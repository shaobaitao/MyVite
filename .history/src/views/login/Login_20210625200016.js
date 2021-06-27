import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
   
      password: '',
    });

    return { state };
  },
};