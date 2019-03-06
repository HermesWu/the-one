import Toast from './toast'

export default{
    install(vue, options){
        vue.prototype.$toast = function(message, toastOptions){
            let Constructor = vue.extend(Toast)
            let toast = new Constructor({
                propsData:toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}