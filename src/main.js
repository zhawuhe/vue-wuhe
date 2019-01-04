//入口文件
import Vue from "vue"

//导入app组件
import App from "./App.vue"

//按需导入mint-ui中的组件
import MintUI from 'mint-ui'     //引入
import 'mint-ui/lib/style.css'
 Vue.use(MintUI) 
// import {Header} from "mint-ui"
// Vue.component(Header.name,Header)


import './lib/mui/css/mui.min.css'

 new Vue({
    el:'#app',
    render:c=>c(App)
})

