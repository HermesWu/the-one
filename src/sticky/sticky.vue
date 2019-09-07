<template>
    <div class="t-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="t-sticky" :class="classes" :style="{left, width, top}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'TheOnenSticky',
    props: {
      distance: {
        type: Number,
        default: 0
      }
    },
    data(){return{
      sticky: false,
      height: undefined,
      top: undefined,
      left: undefined,
      width: undefined
    }},
    mounted(){
      this.top = this.offsetTop()
      this.windowScrollHandler = this._windowScrollHandler.bind(this)
      window.addEventListener('scroll', this.windowScrollHandler)
    },
    beforeDestroy(){
      window.removeEventListener('scroll', this.windowScrollHandler)
    },
    computed:{
      classes(){
        return {
          sticky: this.sticky
        }
      }
    },
    methods: {
      offsetTop() {
        let {top} = this.$refs.wrapper.getBoundingClientRect()
        return top + window.scrollY
      },
      _windowScrollHandler(){
        if (window.scrollY > this.top) {
          let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
          this.height = height + 'px'
          this.left = left + 'px'
          this.width = width + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        } else {
          this.height = undefined
          this.left = undefined
          this.top = undefined
          this.width = undefined
          this.sticky = false
        }
      }
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
    .t-sticky-wrapper {
        .sticky {
            position: fixed;
        }
    }
</style>