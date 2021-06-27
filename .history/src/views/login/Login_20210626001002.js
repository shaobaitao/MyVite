import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      username: '',
      password: localStorage,
    });
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      state,
      onSubmit,
    };
  },
};