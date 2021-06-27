import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    });

    return { state };
  },
};