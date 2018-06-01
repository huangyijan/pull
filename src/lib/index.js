import vuePullFresh from './pull-refresh.vue'
const pullfresh={
    install:function(Vue){

        Vue.component(vuePullFresh.name,vuePullFresh)
    }
   
}
//全局模式安装
if(typeof window !=='undefined'&&window.Vue){
    window.Vue.use(pullfresh);
}
export default pullfresh;