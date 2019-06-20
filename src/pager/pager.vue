<template>
  <div class="t-pager">
    <span class="t-pager-nav prev" :class="{ disabled:currentPage === 1}"
      @click="onClickPage(currentPage - 1)">
      <t-icon name="left"></t-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="t-pager-item current">
          {{ page }}
        </span>
      </template>
      <template v-else-if="page === '...'">
        <t-icon class="t-pager-separator" name="dots"></t-icon>
      </template>
      <template v-else>
        <span class="t-pager-item other" @click="onClickPage(page)">
          {{ page }}
        </span>
      </template>
    </template>
    <span class="t-pager-nav next" :class="{ disabled:totalPage === currentPage}"
          @click="onClickPage(currentPage + 1)">
      <t-icon name="right"></t-icon>
    </span>
  </div>
</template>
<script>
  import TIcon from '../icon'

  export default {
    name: 'TheOnenPager',
    components: {TIcon},
    data() {
      return {}
    },
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    methods:{
      onClickPage(n){
        if (n >= 1 && n <= this.totalPage) {
          this.$emit('update:currentPage', n)
        }
      }
    },
    mounted(){
    },
    computed: {
      pages() {
        return unique([1, this.totalPage,
          this.currentPage,
          this.currentPage - 1, this.currentPage - 2,
          this.currentPage + 1, this.currentPage + 2
        ]
          .filter(n => n >= 1 && n <= this.totalPage))
          .sort((a, b) => a - b)
          .reduce((prev, current, index, array) => {
            prev.push(current)
            array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
            return prev
          }, [])
      }
    }
  }

  function unique(array) {
    var object = {}
    array.map(number => {
      object[number] = true
    })
    return Object.keys(object).map(s => parseInt(s, 10))
  }
</script>
<style type="text/scss" scoped lang="scss">
  @import '../../styles/var';

  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  .t-pager{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    &-item{
      min-width: $width;
      height: $height;
      border-radius: $border-radius;
      border: 1px solid $grey;
      padding: 0 4px;
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.current,&:hover{
        border-color: $blue;
      }
      &.current{
        cursor: default;
      }
    }
    &-separator{
      width: $width;
      font-size: $font-size;
    }
    &-nav{
      display: flex;
      justify-content: center;
      align-items: center;
      width: $width;
      heigth: $height;
      border-radius: $border-radius;
      font-size: $font-size;
      cursor: pointer;
      &.disabled{
        cursor: default;
        svg{fill: darken($grey, 30%);}
      }
    }
  }
</style>
