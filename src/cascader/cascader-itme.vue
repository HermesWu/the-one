<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="cascader-items-left">
      <div class="cascader-items-left-lable" v-for="item in items" @click="selectLeft(item)">
        {{item.name}}
        <t-icon class="cascader-items-left-icon" v-if="item.children" name="right"> </t-icon>
      </div>
    </div>
    <div class="cascader-items-right" v-if="rightItems">
      <cascader-items :items="rightItems"  :height="height"></cascader-items>
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
          }
      },
      data(){
          return {
              leftSelected: null
          }
      },
      methods:{
          selectLeft(item){
              this.rightItems=[]
              this.leftSelected = item;
          }
      },
      computed:{
          rightItems(){
              if(this.leftSelected && this.leftSelected.children){
                  return this.leftSelected.children
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