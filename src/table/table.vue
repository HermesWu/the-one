<template>
  <div class="t-table">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th v-for="column in columns">
          {{ column.name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in dataSource">
        <td>{{ index + 1 }}</td>
        <template v-for="column in columns">
          <td>
            {{ item[column.key] }}
          </td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
    name: 'TTable',
    data(){

    },
    props:{
      columns:{
        type: Array,
        required: true
      },
      dataSource:{
        type: Array,
        required: true
      }
    }
  }
</script>
<style type="text/scss" lang="scss">

</style>
