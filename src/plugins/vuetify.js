import Vue from 'vue';
import Vuetify, {
  VButton,
  VSlider,
  VApp,
  VTextField,
} from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  components: {
    VButton,
    VSlider,
    VApp,
    VTextField,
  },
  icons: {
    iconfont: 'fa',
  },
});
