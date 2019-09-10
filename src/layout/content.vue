<template>
    <div class="t-content">
        <slot></slot>
    </div>
</template>
<script>
    export default{
      name: 'TheonenContent'
    }
</script>
<style type="text/scss" lang="scss" scoped>
    .t-content {
        flex-grow: 1;
    }
</style>