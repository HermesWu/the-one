<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        mounted() {
            let name = this.$el.children
            for( let node of name) {
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn(`g-button-group的子元素应该是g-button,但你写的是${node.nodeName}`)
                }
            }
        }
    }
</script>
<style type="text/scss" lang="scss" scoped>
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        >.g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-idnex: 1;
            }
            &:first-child{
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }
            &:last-child{
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }

        }
    }
</style>