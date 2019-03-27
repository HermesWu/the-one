<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper" :class="[`position-${position}`]">
            <slot name="content" :close="close"></slot>
        </div>
        <span class="trigger-wrapper" ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenPopover',
        data(){
            return{
                visible: false
            }
        },
        props:{
          position: {
              type: String,
              default: 'top',
              validator(value){
                  return ['top', 'bottom', 'right', 'left'].indexOf(value) >=0
              }
          },
            trigger:{
                type: String,
                default: 'click',
                validator(value){
                    return ['click', 'hover'].indexOf(value)>=0
                }
            }
        },
        mounted(){
            let {popover} = this.$refs
            if(this.trigger === 'click'){
                popover.addEventListener('click', this.onClick)
            }else{
                popover.addEventListener('mouseenter', this.open)
                popover.addEventListener('mouseleave', this.close)
            }
        },
        destroy(){
            let {popover} = this.$refs
            if(this.trigger === 'click'){
                popover.removeEventListener('click', this.onClick)
            }else{
                popover.removeEventListener('mouseenter', this.open)
                popover.removeEventListener('mouseout', this.close)
            }
        },
        methods:{
            onClickDocument(e){
                // 防止 content 冒泡到 document 触发关闭div
                // content 在外面 所以要加上
                // 只要是 popover 就不处理 交给 popover 自己处理
                if(!this.$refs.popover.contains(e.target)&&!this.$refs.contentWrapper.contains(e.target)){
                   this.close()
                }
            },
            positionContent(){
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                let {height:height2} = contentWrapper.getBoundingClientRect()
                let x ={
                    top:{
                        top: top + window.scrollY,
                        left: left + window.scrollX,
                    },
                    bottom:{
                        top: top + height + window.scrollY,
                        left: left + window.scrollX,
                    },
                    left:{
                        top: top + (height - height2)/2 + window.scrollY,
                        left: left + window.scrollX,
                    },
                    right:{
                        top: top + (height - height2)/2 + window.scrollY,
                        left: left + width + window.scrollX,
                    },
                }
                contentWrapper.style.top = x[this.position].top + 'px'
                contentWrapper.style.left = x[this.position].left + 'px'

            },
            open(){
                this.visible = true
                this.$nextTick(()=>{
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click',this.onClickDocument)
            },
            onClick(event){
                // 防止 点击 content 触发 popover 的点击事件
                if(this.$refs.triggerWrapper.contains(event.target)){
                    if(this.visible === true){
                        this.close()
                    }else{
                        this.open()
                    }
                }
            }
        }
    }
</script>
<style lang="scss" type="text/scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover{
        display: inline-block;
        vertical-align: middle;
        position: relative;
        > .trigger-wrapper{
            display: inline-block;
        }
    }
    .content-wrapper{
        border: 1px solid $border-color;
        border-radius: $border-radius;
        max-width: 20em;
        padding: 0.5em 1em;
        word-break: break-all;
        /*box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5));
        background-color: white;
        position: absolute;
        &::before, &::after{
            position: absolute;
            content: '';
            display: block;
            width: 0;
            height: 0px;
            border: 10px solid transparent;
        }
        &.position-top{
            left: 0;
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after{
                top: 100%;
                left: 10px;
                border-bottom: none;
            }
            &::before{
                border-top-color: black;
            }
            &::after{
                top: calc(100% - 1px);
                border-top-color: white;
            }
        }
        &.position-bottom{
            left: 0;
            margin-top: 10px;
            &::before, &::after{
                bottom: 100%;
                left: 10px;
                border-top: none;
            }
            &::before{
                border-bottom-color: black;
            }
            &::after{
                bottom: calc(100% - 1px);
                border-bottom-color: white;
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after{
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }
            &::before{
                border-left-color: black;
            }
            &::after{
                bottom: calc(100% - 1px);
                border-left-color: white;
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before, &::after{
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }
            &::before{
                border-right-color: black;
            }
            &::after{
                bottom: calc(100% - 1px);
                border-right-color: white;
            }
        }
    }
</style>