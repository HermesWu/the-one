import Toast from './toast'

export default {
    install(vue, options) {
        let currentToast
        vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({vue, message,propsData: toastOptions })


        }

    }
}

function createToast({vue, message, propsData}) {
    let Constructor = vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}