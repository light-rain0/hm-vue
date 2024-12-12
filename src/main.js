// import './styles/index.css' // 公共全局样式
import {createApp} from "vue";
import App from './App.vue'

const app = createApp(App)
// 全局注册 Vue.component(组件名,组件对象)
// app.component("HmButton", HmButton)
// 自定义全局指令
// app.directive(
//     'color', {
//         inserted(el, binding) {
//             console.log(el)
//         }
//
//     })

app.directive('fouc', {
    inserted(el) {
        el.focus()
    }
})
app.mount('#app')
// createApp(Appcp).mount('#app');


