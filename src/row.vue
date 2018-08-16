<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenRow',
        props:{
            gutter: {
                type: [Number, String]
            }
        },
        computed:{
            rowStyle() {
                return {
                    marginLeft: -this.gutter/2 + 'px',
                    marginRight: -this.gutter/2 + 'px'
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style type="text/css" lang="scss" scoped>
    .row {
        display: flex;
        /*border: 1px solid green;*/

    }
</style>