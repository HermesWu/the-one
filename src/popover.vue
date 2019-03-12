<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content" ></slot>
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
        methods:{
            onClickDocument(e){
                console.log('document关闭');
                // 防止 content 冒泡到 document 触发关闭div
                if(!this.$refs.contentWrapper.contains(e.target)){

                   this.close()
                }
            },
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
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
                        console.log('button关闭');
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
        /*box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
        background-color: white;
        position: absolute;
        left: 0;
        transform: translateY(-100%);
        margin-top: -10px;
        &::before, &::after{
            position: absolute;
            top: 100%;
            left: 10px;
            content: '';
            display: block;
            width: 0;
            height: 0px;
            border: 10px solid transparent;

        }
        &::before{
            border-top-color: black;
        }
        &::after{
            top: calc(100% - 1px);
            border-top-color: white;
        }
    }
</style>