<template>
  <div class="t-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchend="onTouchEnd"

  >
    <div class="t-slides-window">
      <div class="t-slides-wrapper">
        <slot></slot>
      </div>

    </div>
    <div class="t-slides-dots">
      <span @click="select(selectedIndex -1)">
        <t-icon name="left"></t-icon>
      </span>
      <span v-for="n in childrenLength" :class="{'active': selectedIndex == n-1}" @click="select(n-1)" :key="n" :data-index="n-1">
        {{ n }}
      </span>
      <span @click="select(selectedIndex +1)">
        <t-icon name="right"></t-icon>
      </span>
    </div>
  </div>
</template>
<script>
  import TIcon from '../icon'
  export default{
    components:{TIcon},
    name: 'TheOnenSlides',
    props:{
      selected:{
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      },

      autoPlayDelay:{
        type: Number,
        default: 3000
      }
    },
    data(){
      return {
        lastSelectedIndex: undefined,
        childrenLength:0,
        timeId: undefined,
        startTouch: undefined
      }
    },
    created(){
    },
    mounted(){
      this.updateChildren()
      if(this.autoPlay){
        this.playAutomatically()
      }
      this.childrenLength = this.$children.filter(vm=>vm.$options.name === 'TheOnenSlidesItem').length
      this.lastSelectedIndex = this.getSelected()


    },
    updated(){
      this.updateChildren()
    },
    computed:{
      names(){
        return this.$children.filter(vm=>vm.$options.name === 'TheOnenSlidesItem').map(vm=>vm.name)
      },
      selectedIndex(){
        return this.names.indexOf(this.getSelected())
        // this.selected reutrn index ===-1 ? 0: index
      }

    },
    methods:{

      onMouseEnter(){
        console.log('mouse')
        this.pause()
      },
      onMouseLeave(){
        this.playAutomatically()
      },
      onTouchStart(e){
        this.startTouch = e.touches[0]
        this.pause()
      },
      onTouchEnd(e){
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if(rate > 2){
          if(x2>x1){
            console.log('you')
            this.select(this.selectedIndex -1)
          }
          if(x2 < x1){
            console.log('zuo')
            this.select(this.selectedIndex +1)
          }
        }
        this.$nextTick(()=>{
          this.playAutomatically()
        })
      },
      /**
       * @Description: 更新 selected
       * @author chunXiang Wu
       * @date 2019-04-24
       */
      select(index){
        console.log(index)
        if(index==this.names.length){
          index=0
        }
        if(index == -1){index=this.names.length-1}
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      /**
       * 通知子组件 selected 以及 动画方向
       */
      updateChildren(){
        this.$children.map(vm=>{
          let reserve = this.selectedIndex < this.lastSelectedIndex ? true: false
          if(this.timeId){
            if(this.lastSelectedIndex == this.names.length-1 && this.selectedIndex == 0){reserve = false}
            if(this.lastSelectedIndex == 0 && this.selectedIndex == this.names.length-1){reserve = true}
          }
          vm.reserve = reserve
          this.$nextTick(()=>{
            vm.selected = this.getSelected()
          })
        })
      },
      /**
       * 获取当前选中项
       * @returns {*}
       */
      getSelected  (){
        let first = this.$children[0]
        return this.selected || first.name
      },
      /**
       * 自动播放动画
       */
      playAutomatically(){
        if(this.timeId){return}
        let run = ()=>{
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index+1
          this.select(newIndex) // 告诉外界 选中 新的index
          this.timeId = setTimeout(run, this.autoPlayDelay)
        }
        this.timeId = setTimeout(run, this.autoPlayDelay)
      },
      /**
       * 取消自动播放
       */
      pause(){
        window.clearTimeout(this.timeId)
        this.timeId = undefined
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .t-slides{
    /*display: inline-block;*/
    .t-slides-window{
      overflow: hidden;
      .t-slides-wrapper{
        /*display: flex;*/
        position: relative;
      }
    }
    .t-slides-dots{
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      span{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 8px;
        background: #ddd;
        font-size: 12px;
        &.active{
          background-color: black;
          color: #fff;
        }
      }
    }
  }
</style>