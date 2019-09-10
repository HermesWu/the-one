<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="cascader-items-left">
      <div class="cascader-items-left-lable" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <template v-if="item.name === loadItem.name">
          <t-icon class="cascader-items-left-icon loading" v-if="rightArrowVisible(item)" name="loading"> </t-icon>
        </template>
        <template v-else>
          <t-icon class="cascader-items-left-icon icon" v-if="rightArrowVisible(item)" name="right"> </t-icon>
        </template>

      </div>
    </div>
    <div class="cascader-items-right" v-if="rightItems">
      <cascader-items :items="rightItems" :load-item="loadItem"  :height="height" :selected="selected" :level="level+1" :loadDate="loadDate" @update:selected="onUpdateSelected"></cascader-items>
    </div>

  </div>
</template>
<script>
  import Icon from '../icon'
  export default{
      name: "TheonenCascaderItems",
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
          loadDate:{
              type: Function
          },
          loadItem:{
              type: Object,
              default: ()=>{
                  return {}
              }
          },
          level: {
              type: Number,
              default: 0
          }
      },
      methods:{
          rightArrowVisible(item){
              return this.loadDate ? !item.isLeaf:item.children
          },
          onClickLabel(item){
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy[this.level] = item
              copy.splice(this.level+1) // 删除 后面等级数据
              this.$emit('update:selected', copy)
          },
          onUpdateSelected(newSelected){
              this.$emit('update:selected', newSelected)
          }
      },
      computed:{
          rightItems(){
              if(this.selected[this.level]) { // 当前选择项
                let selected = this.items.filter(item => item.name == this.selected[this.level].name)

                  if(selected && selected[0].children&&selected[0].children.length>0){
                      return selected[0].children
                  }
              }

          }
      }
  }
</script>
<style type="text/scss" scoped lang="scss">
  @import '../../styles/var';
  @keyframes spin{
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  }
  .cascader-items{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .cascader-items-left{
      height: 100%;
      padding-top: .5em;
      overflow: auto;
      .cascader-items-left-lable{
        padding: .5em 1em;
        display: flex;
        align-items: center;
        white-space: nowrap;
        > .name{
          margin-right: 1em;
          user-select: none;
        }
        &:hover{
          background: $grey;
        }
        > .loading{
          animation: spin 2s infinite linear;
        }
      }
      .cascader-items-left-icon{
        margin-left: auto;
      }

    }
    .cascader-items-right{
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
  }
</style>