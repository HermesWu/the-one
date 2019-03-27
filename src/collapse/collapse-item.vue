<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{ title }}
        </div>
        <div class="content" v-if="open" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheOnenCollapseItem",
        inject:['eventBus'],
        data(){
            return{
                open: false
            }
        },
        props:{
            title:{
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected', (names)=>{
                if(names.indexOf(this.name) >=0){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        },
        methods:{
            close(){
                this.open = false
            },
            toggle(){
                if(this.open){
                    // this.open = false
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                }else{
                    // this.open = true
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    @import '../../styles/var';
    .collapse-item {
        &:first-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        > .title{
            display: flex;
            align-items: center;
            margin: -1px;
            border: 1px solid $grey;
            min-height: 32px;
            padding: 0 8px;
            cursor: pointer;
        }
        > .content{
            padding: 1px 8px;
        }

    }
</style>