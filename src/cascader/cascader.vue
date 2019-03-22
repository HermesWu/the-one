<template>
  <div class="t-cascader">
    <div class="t-cascader-triger" @click="popoverVisible=!popoverVisible"></div>
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
          }
      },
      methods:{
          onUpdateSelected(newSelected){
              console.log(1)
              this.$emit('update:selected', newSelected)
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