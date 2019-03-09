<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenTabsPane',
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                console.log('pane 接受的name', name)
            })
        }
    }
</script>
<style lang="scss" type="text/scss">
    .tabs-pane{

    }
</style>