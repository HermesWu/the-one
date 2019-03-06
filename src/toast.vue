<template>
    <div class="wrapper" :class="toastClass">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{ closeButton.text }}
        </span>
        </div>
    </div>
</template>
<script>

    export default{
        name: 'TheOneToast',
        props:{
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay:{
                type: Number,
                default: 5
            },
            closeButton:{
                type: Object,
                default(){
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml:{
                type: Boolean,
                default: false
            },
            position:{
                type: String,
                default: 'top',
                validator(value){
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            }
        },
        computed:{
            toastClass(){
                return {[`position-${this.position}`]: true}
            }
        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyles(){
              this.$nextTick(()=>{
                  this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
              })
            },
            close(){
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this)
                }
            },
            log(){
                console.log('测试')
            }
        },
        mounted(){
            this.updateStyles()
            this.execAutoClose()
        },
    }
</script>
<style type="text/scss" lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade-in{
        0%{opacity: 0}
        100%{opacity: 1}
    }
    @keyframes slide-up{
        0%{opacity: 0;transform: translateY(100%)}
        100%{opacity: 1;transform: translateY(0)}
    }
    @keyframes slide-down{
        0%{opacity: 0;transform: translateY(-100%)}
        100%{opacity: 1;transform: translateY(0)}
    }
    .wrapper{
        position: fixed;
        left: 50%;
        &.position-top{
            top: 0;
            transform: translateX(-50%);
            > .toast{
                animation: slide-down 300ms;
            }
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
            > .toast{
                animation: slide-up 300ms;
            }
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%, -50%);
            > .toast{
                animation: fade-in 300ms;
            }
        }
        .toast{
            font-size: $font-size;
            min-height: $toast-min-height;
            background: $toast-bg;
            color: white;
            display:flex;
            align-items: center;
            padding: 0 16px;
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
            .message{
                padding: 8px 0;
            }
            .close{
                padding-left: 16px;
                flex-shrink: 0;
            }
            .line{
                border-left: 1px solid #666;
                margin-left: 16px;
            }
        }
    }
</style>