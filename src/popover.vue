<template>
    <div class="popover" @click.stop="x">
        <div v-if="visible" class="content-wrapper" @click.stop>
            <slot name="content" ></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    // let eventHandle = ()=>{
    //
    // }
    export default{
        name: 'TheOnenPopover',
        data(){
            return{
                visible: false
            }
        },
        methods:{
            eventHandle(){
                console.log('xx')
                console.log('docuemnt 隐藏 content');
                this.visible = false
                console.log('移除监听');
                document.removeEventListener('click',this.eventHandle)
            },
            x(){
                console.log(1)
                this.visible = !this.visible
                if(this.visible){
                    this.$nextTick(()=>{
                        console.log('添加监听');
                        document.addEventListener('click', this.eventHandle)
                    })
                }else{
                    console.log('button 隐藏 content');
                    document.removeEventListener('click',this.eventHandle)
                    console.log('button移除监听');

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
        > .content-wrapper{

            border: 1px solid red;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
            position: absolute;
            bottom: 100%;
            left: 0;
        }
    }
</style>