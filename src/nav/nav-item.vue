<template>
  <div class="t-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'TheOnenNavItem',
    props:{
      name:{
        type: String,
        require: true
      }
    },
    data(){
      return {
        selected: false
      }
    },
    methods:{
      onClick(){
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .t-nav-item{
    &.selected{
      background: red;
    }
  }
</style>