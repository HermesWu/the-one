<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="cascader-items-left">
      {{level}}
      {{selected[level]&&selected[level].name}}
      <div class="cascader-items-left-lable" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <t-icon class="cascader-items-left-icon" v-if="item.children" name="right"> </t-icon>
      </div>
    </div>
    <div class="cascader-items-right" v-if="rightItems">
      <cascader-items :items="rightItems"  :height="height" :selected="selected" :level="level+1" @update:selected="onUpdateSelected"></cascader-items>
    </div>

  </div>
</template>
<script>
  import Icon from '../icon'
  export default{
      name: "cascaderItems",
      components:{
        tIcon: Icon
      },
      props:{
          items:{
              type: Array
          },
          height: {
              type:String
          },
          selected:{
              type: Array,
              default: ()=>{
                  return []
              }
          },
          level: {
              type: Number,
              default: 0
          }
      },
      methods:{
          onClickLabel(item){
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy[this.level] = item
              this.$emit('update:selected', copy)
          },
          onUpdateSelected(newSelected){
              this.$emit('update:selected', newSelected)
          }
      },
      computed:{
          rightItems(){
              let currentSelected = this.selected[this.level]
              if(currentSelected && currentSelected.children){
                  return currentSelected.children
              }else{
                  return null
              }
          }
      }
  }
</script>
<style type="text/scss" scoped lang="scss">
  @import '../../styles/var';
  .cascader-items{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .cascader-items-left{
      height: 100%;
      padding-top: .3em;
      .cascader-items-left-lable{
        padding: .3em 1em;
        display: flex;
        align-items: center;
      }
      .cascader-items-left-icon{
        margin-left: .5em;
        transform: scale(0.8);
      }
    }
    .cascader-items-right{
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
  }
</style>