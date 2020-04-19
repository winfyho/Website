import Toast from './Toast.vue'
const _toast = {}
_toast.install = function(Vue){
    console.log("vue use")
    
    const toastConstructor = Vue.extend(Toast)
    const toast = new toastConstructor()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
    Vue.component('Toast',Toast)

}
export default _toast