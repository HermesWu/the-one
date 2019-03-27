<template>
  <div class="t-cascader">
    <div class="t-cascader-triger" @click="popoverVisible=!popoverVisible">
      {{result}}
    </div>
    <div class="t-cascader-popover" v-if="popoverVisible">
      <cascader-items :items="source" :height="height" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
    </div>
  </div>
</template>
<script>
  import CascaderItems from  './cascader-itme'

  export default{
      name: 'TheOnenCascader',
      components:{
        CascaderItems
      },
      data(){
        return {
            popoverVisible: false,
        }
      },
      props:{
          source:{
              type: Array
          },
          height:{
              type: String
          },
          selected: {
              type: Array,
              default:()=>{
                  return []
              }
          },
          loadDate:{
              type: Function
          }
      },
      methods:{
          onUpdateSelected(newSelected){
              console.log(1)
              this.$emit('update:selected', newSelected)
              let lastItem = newSelected[newSelected.length-1]
              let simplest = (children, id)=>{
                  return children.filter(item=>item.id ==id)[0]
              }
              let complex = (children, id)=>{
                  let hasChildren = []
                  let noChildren = []
                  children.forEach(item=>{
                      if(item.children){
                          hasChildren.push(item)
                      }else{
                          noChildren.push(item)
                      }
                  })
                  let found = simplest(noChildren,id)
                  if(found){
                      return found
                  }else{
                      found = simplest(hasChildren, id)
                      if(found){
                          return found
                      }else{
                          for(let i = 0;i<hasChildren.length ;i++){
                              found = complex(hasChildren[i].children, id)
                              if(found){
                                  return found
                              }
                          }
                          return undefined
                      }
                  }
              }
              let upDateSource = (result)=>{
                  // let toUpdate = this.source.filter(item=>item.id ===lastItem.id)[0]
                  let copy = JSON.parse(JSON.stringify(this.source))
                  let toUpdate = complex(copy, lastItem.id)
                  // toUpdate.children = result
                  // this.$emit('update:source', copy)
                  // console.log('toUpdate', toUpdate)
                  this.$set(toUpdate,'children', result)
                  this.$emit('update:source', copy)

              }
              this.loadDate(lastItem, upDateSource)
          }
      },

      computed:{
          result(){
              return this.selected.map(item=>item.name).join('/')
          }
      }
  }
</script>
<style scoped lang="scss">
  @import '../../styles/_var.scss';
  .t-cascader{
    position: relative;
    .t-cascader-triger{
      border: 1px solid red;
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0em 1em;
    }
    .t-cascader-popover{
      @extend .box-shadow;
      display: flex;
      position: absolute;
      top:100%;
      left: 0;
      background: white;
    }
  }

</style>