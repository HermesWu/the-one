<template>
  <div class="t-sub-nav" :class="{active, vertical}" v-click-outside="close">
    <span class="t-sub-nav-label" @click="onClick">
      <slot name="title" ></slot>
      <span class="t-sub-nav-icon" :class="{open, vertical}">
        <t-icon name="left"></t-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
        >
        <div class="t-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="t-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script>
  import ClickOutside from '../click-outside.js'
  import TIcon from '../icon'
  export default{
    name: 'TheOnenSubNav',
    directives:{ClickOutside},
    inject:['root', 'vertical'],
    components:{TIcon},
    data(){
      return {
        open: false
      }
    },
    props:{
      name: String,
      require: true
    },
    computed:{
      active(){
        return this.root.namePath.indexOf(this.name)>=0?true:false
      }
    },
    methods:{
      enter(el, done){
        let {height} = el.getBoundingClientRect()
        el.style.height=0
        el.getBoundingClientRect()
        el.style.height=`${height}px`
        setTimeout(()=>{
          done()
        },0)
      },
      afterEnter(el){
        el.style.height='auto'
      },
      leave(el, done){
        let {height} = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = 0
        setTimeout(()=>{
          done()
        },0)
      },
      afterLeave(el){
        el.style.height='auto'
      },
      close(){
        this.open = false
      },
      onClick(){
        this.open = !this.open
      },
      updateNamePath(){
        this.root.namePath.unshift(this.name)
        if(this.$parent.updateNamePath){
          this.$parent.updateNamePath()
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../../styles/var';
  .t-sub-nav{
    position: relative;
    &:not(.vertical){
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
    }
    &.vertical{
      &.active{
        color: $blue;
      }
    }
    &-label{
      padding: 10px 20px;
      display: block;
    }
    &-icon{
      display: none;
    }
    &-popover{
      transition: height 250ms;
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
      &.vertical{
        /*flex-direction: column;*/
        overflow: hidden; // 必须要有，否则动画交叉 不好看
        position: static;
        border-radius: 0;
        box-shadow: none;
        border: none;

      }
    }
  }
  .t-sub-nav .t-sub-nav {
    .t-sub-nav-icon{
      transition: transform 250ms;
      display: inline-flex;
      margin-left: 1em;
      svg {fill: $light-color;}
      &.vertical{
        transform: rotate(90deg);
        &.open{
          transform: rotate(270deg);
        }
      }
      &.open{
        transform: rotate(180deg);
      }
    }
    &-label{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &.active{
      &::after{
        display: none;
      }
    }
    .t-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 4px;
    }
  }

</style>