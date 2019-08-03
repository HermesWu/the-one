<template>
    <div class="t-table-wrapper">
        <table class="t-table" :class="{bordered, striped, conpact}">
            <thead>
            <tr>
                <th><input type="checkbox" @change="onChangeAllItems($event)" ref="checkAll" :checked="areAllItemsSelected"></th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in columns" :key="column.key">
                    {{ column.name }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in dataSource" :key="item.id">
                <th><input type="checkbox" @change="onChangeItem(item, index, $event)"
                           :checked="checked(item)"></th>
                <td v-if="numberVisible">{{ index + 1 }}</td>
                <template v-for="column in columns">
                    <td :kye="column.key">
                        {{ item[column.key] }}
                    </td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
  export default {
    name: 'TTable',
    data() {
      return {}
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      bordered: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: true
      },
      conpact: {
        type: Boolean,
        default: false
      },
      numberVisible: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      areAllItemsSelected: function () {
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) {
          return false
        }
        let equal = true
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
          }
        }
        return equal
      }
    },
    watch: {
      selectedItems() {
        if (this.selectedItems.length > 0) {
          this.$refs.checkAll.indeterminate = true
        } else {
          this.$refs.checkAll.indeterminate = false
        }
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.checkAll.indeterminate = false
        }
      }
    },
    methods: {
      checked(item){
        return this.selectedItems.filter(i => i.id === item.id).length > 0
      },
      onChangeItem(item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          // 深拷贝 不能直接 indexOf item 不是一个对象
          let index = copy.indexOf(copy.filter(i => i.id === item.id)[0])
          copy.splice(index, 1)
          /*
          *
          * copy = copy.filter(i => i.id !== item.id)
          * */
        }
        console.log('end', copy);
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e) {
        let selected = e.target.checked
        this.$emit('update:selectedItems', selected ? this.dataSource : [])

      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
    @import '../../styles/var';

    .t-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        td, th {
            padding: 8px;
            border-bottom: 1px solid $grey;
        }

        &.conpact {
            td, th {
                padding: 4px;
            }
        }

        &.striped {
            tbody {
                > tr {
                    &:nth-child(odd) {
                        background: white;
                    }

                    &:nth-child(even) {
                        background: lighten($grey, 3%);
                    }
                }
            }
        }

        &.bordered {
            td, th {
                border: 1px solid $grey;
            }
        }

        th {
            text-align: left;
        }
    }
</style>
