<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>
<script>
    export default {
        name: 'TheOnenTabsHead',
        inject: ['eventBus'],

        mounted() {
            this.eventBus.$on('update:selected', (name, vm) => {
                let {width, left} = vm.$el.getBoundingClientRect()
                console.log(left)
                let {left:left2} = vm.$el.parentElement.getBoundingClientRect()
                this.$refs.line.style.width = width + 'px'
                this.$refs.line.style.left = left - left2  + 'px'

            })
        },
    }
</script>
<style lang="scss" type="text/scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        justify-content: start;
        align-items: center;
        height: $tab-height;
        position: relative;
        border-bottom: 1px solid #ddd;

        > .actions-wrapper {
            margin-left: auto;
        }
        > .line {
            position: absolute;
            bottom: 0;
            border: 1px solid $blue;
            transition: all 350ms;
        }
    }
</style>