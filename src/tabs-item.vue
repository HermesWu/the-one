<template>
    <div class="tabs-item" @click="xxx">
        <g-icon name="settings"></g-icon>
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenTabsItem',
        inject: ['eventBus'],
        props:{
            disabled:{
                type: Boolean,
                default: false
            },
            name: {
                type: String|Number,
                required: true
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                console.log('item 接受的 name', name)
            })
        },
        methods: {
            xxx(){
                this.eventBus.$emit('update:selected', this.name)
            }
        }

    }
</script>
<style lang="scss" type="text/scss">
    .tabs-item{

    }
</style>