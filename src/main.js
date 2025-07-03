import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)

// app.provide("message","hello!")
// app.mount('#app')


// app.directive('example',{
//     mounted(el,binding){
//         console.log('Directive bound');
//         console.log('Element:', el);
//         console.log('Binding value:', binding.value);
//         console.log('Directive name:', binding.name);
//         console.log('Argument:', binding.arg);
//         console.log('Modifiers:', binding.modifiers);
//         console.log('Expression:', binding.expression);
//         console.log('Old value:', binding.oldValue);
//     }
// })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn
  }).use(router).use(store).use(ElementPlus).mount('#app')
