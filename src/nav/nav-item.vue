<template>
  <div class="t-nav-item" :class="{selected, vertical}" :data-name="name" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'TheOnenNavItem',
    inject:['root', 'vertical'],
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
        this.root.namePath=[]
        this.$parent.updateNamePath&&this.$parent.updateNamePath()
        this.$emit('update:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../styles/var';
  .t-nav-item{
    padding: 10px 20px;
    position: relative;
    &:not(.vertical){
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
    &.vertical{
      &.selected{
        color: $blue;
      }
    }
  }
  .t-sub-nav .t-nav-item:not(.vertical){
    &.selected{
      color: $color;
      background: $grey;
      &::after{
        display: none;
      }
    }
  }

</style>