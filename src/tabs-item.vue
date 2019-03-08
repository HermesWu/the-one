<template>
    <div class="tabs-item">
        <g-icon name="settings"></g-icon>
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenTabsItem',
        props:{
            disabled:{
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" type="text/scss">
    .tabs-item{

    }
</style>