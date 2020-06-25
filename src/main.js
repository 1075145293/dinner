import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast,MessageBox  } from 'mint-ui';
import { Checkbox, CheckboxButton,CheckboxGroup,Input,InputNumber,Button,Form,FormItem, Table,TableColumn,Popover,Tooltip,Tag,Pagination,Loading} from 'element-ui';
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Loading);
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import '@a/css/index.styl'
Vue.config.productionTip = false
Vue.prototype.$tips = Toast
Vue.prototype.$message = MessageBox

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
