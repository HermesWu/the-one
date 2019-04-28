<template>
  <div class="t-sub-nav" :class="{active}">
    <span @click="onClick">
      <slot name="title" ></slot>
    </span>
    <div class="t-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>

  </div>
</template>
<script>
  export default{
    name: 'TheOnenSubNav',
    data(){
      return {
        open: false,
        active: false
      }

    },
    methods:{
      onClick(){
        console.log(1)
        this.open = !this.open
        this.active = !this.active
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../styles/var';
  .t-sub-nav{
    position: relative;
    &.active{
      &::after{
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border: 2px solid $blue;
      }
    }
    > span{
      padding: 10px 20px;
      display: block;
    }
    &-popover{
      background-color: white;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      font-size: $font-size;
      color: $light-color;
      min-width: 8em;
      margin-top: 4px;
      border-radius: $border-radius;
    }
  }
  .t-sub-nav .t-sub-nav .t-sub-nav-popover{
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>