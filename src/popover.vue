<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper">
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
                console.log('关闭');
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
    .popover{
        display: inline-block;
        vertical-align: middle;
        position: relative;
    }
    .content-wrapper{
        border: 1px solid red;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        transform: translateY(-100%);
    }
</style>