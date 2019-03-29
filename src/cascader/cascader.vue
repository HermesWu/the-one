<template>
  <div class="t-cascader" ref="cascader">
    <div class="t-cascader-triger" @click="toggle">
      {{result}}
    </div>
    <div class="t-cascader-popover" v-if="popoverVisible">
      <cascader-items :items="source" :loadItem="loadItem" :height="height" :selected="selected" :loadDate="loadDate" @update:selected="onUpdateSelected"></cascader-items>
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
            loadItem: {}
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
          onClickDocument(e){
              let {cascader} = this.$refs
              let {target} = e
              if(cascader == target || cascader.contains(target)){return}
              this.close()
          },
          open(){
            this.popoverVisible = true
            // this.$nextTick(()=>{
            //     document.addEventListener('click', this.x)
            // })
            setTimeout(()=>(
                document.addEventListener('click', this.onClickDocument)
            ),0)
          },
          close(){
              console.log('close')
            this.popoverVisible = false
            document.removeEventListener('click',this.onClickDocument)
          },
          toggle(){
            if(this.popoverVisible == true){
                this.close()
            }else{
                this.open()
            }
          },
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
                  this.loadItem = {}
                  let copy = JSON.parse(JSON.stringify(this.source))
                  let toUpdate = complex(copy, lastItem.id)
                  this.$set(toUpdate,'children', result)
                  this.$emit('update:source', copy)

              }
              if(!lastItem.isLeaf && this.loadDate){
                  this.loadDate(lastItem, upDateSource)
                  this.loadItem = lastItem
              }

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
    border: 1px solid green;
    display:inline-block;
    .t-cascader-triger{
      border: 1px solid $border-color;
      border-radius: $border-radius;
      min-width: 10em;
      height: $input-height;
      display: inline-flex;
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