<template>
  <div class="t-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'TheOnenNav',
    provide(){
      return {
        root: this,
        vertical: this.vertical
      }
    },
    data(){
      return {
        items:[],
        namePath:[]
      }
    },
    props:{
      selected:{
        type: Array,
        default: ()=>[]
      },
      multiple:{
        type: Boolean,
        default: false
      },
      vertical:{
        type: Boolean,
        default: false
      }
    },
    mounted(){
      this.updateChildren();
      this.listenToChildren()
    },
    computed:{
      // items(){
      //   return this.$children.filter(vm=>vm.$options.name==='TheOnenNavItem')
      // }
    },
    updated(){
      this.updateChildren()
    },
    methods:{
      updateChildren(){
        this.items.forEach(vm=>{
          vm.selected = this.selected.indexOf(vm.name) >= 0;
        })
      },
      listenToChildren(){
        this.items.forEach(vm=>{
          vm.$on('add:selected', name=>{
            if(this.multiple){
              if(this.selected.indexOf(name)<0){
                let copy = JSON.parse(JSON.stringify(this.selected));
                copy.push(name);
                this.$emit('update:selected', copy)
              }
            }else{
              this.$emit('update:selected', [name])
            }
          })
        })
      },
      addItems(item){
        this.items.push(item)
      }
    },

  }
</script>
<style lang="scss" scoped type="text/scss" >
  @import '../../styles/var';
  .t-nav{
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
    cursor: default;
    user-select: none;
    &.vertical{
      flex-direction: column;
      border: 1px solid $grey;
    }
  }
</style>