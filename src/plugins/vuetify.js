import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import Vuetify, {
  VApp,
  VBtn,
  VDataTable,
  VSlider,
  VTextField,
} from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  components: {
    VApp,
    VBtn,
    VDataTable,
    VSlider,
    VTextField,
  },
  icons: {
    iconfont: 'fa',
  },
});
