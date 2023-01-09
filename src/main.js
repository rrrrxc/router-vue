import Vue from 'vue'
import App from './App.vue'
import vueRouter from './router'

//引入elementui
import ElementUI from 'element-ui';
//引入elementui css
import '@/assets/theme-css/index.css';

import i18n from './i18n'

//安装至vue应用中
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  //引入实例
  i18n,
  router:vueRouter,
  render: h => h(App)
}).$mount('#app')
