import Toast from './toast'

export default {
    install(vue, options) {
        let currentToast
        vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({vue, message,propsData: toastOptions,onClose:()=>{
                console.log('toast close 回调')
                currentToast = null
            }})


        }

    }
}

function createToast({vue, message, propsData, onClose}) {
    let Constructor = vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$on(close, onClose())
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}