<template>
  <div class="t-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'TheOnenNavItem',
    inject:['root'],
    created(){
      this.root.addItems(this)
    },
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
  @import '../../styles/var';
  .t-nav-item{
    padding: 10px 20px;
    position: relative;
    &.selected{
      &::after{
        width: 100%;
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left:0;
        border: 2px solid $blue;
      }
    }
  }
  .t-sub-nav .t-nav-item{
    &.selected{
      color: $color;
      background: $grey;
      &::after{
        display: none;
      }
    }
  }

</style>