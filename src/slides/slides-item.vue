<template>
  <transition name="slide">
    <div class="t-slides-item" v-if="visible" :class="{reserve}">
      <slot></slot>
    </div>
  </transition>

</template>
<script>
  export default{
    name: 'TheOnenSlidesItem',
    props:{
      name:{
        type: String,
        default: '1'
      }
    },
    data(){
      return {
        selected:0,
        reserve: false
      }
    },
    mounted(){
    },
    computed:{
      visible(){
        return this.selected == this.name
      }
    }
  }
</script>
<style scoped type="text/scss" lang="scss">
  .t-slides-item{
  }
  .slide-leave-active{
    position: absolute;
    left: 0; top:0;
    width: 100%;
    heihgt: 100%;
  }
  .slide-enter-active, .slide-leave-active{
    transition: all .5s;
  }
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-enter.reserve{
    transform: translateX(-100%)
  }
  .slide-leave-to{
    transform: translateX(-100%);

  }
  .slide-leave-to.reserve{
    transform: translateX(100%);

  }
</style>