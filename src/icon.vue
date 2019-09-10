<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default{
      name:'TheonenIcon',
        props:{
            name
        }
    }
</script>
<style type="text/scss" lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>