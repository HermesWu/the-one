<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <h3>动态请求数据</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div style="margin-bottom: 20px">
      {{selected &&selected[0]&& selected[0].name || '空'}}
      {{selected &&selected[1]&& selected[1].name || '空'}}
      {{selected &&selected[2]&& selected[2].name || '空'}}
    </div>
    <t-cascader :source.sync="source" :selected.sync="selected" height="200px" :loadDate="loadDate"></t-cascader>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h3>静态数据</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div style="margin-bottom: 20px">
      {{selected2 &&selected2[0]&& selected2[0].name || '空'}}
      {{selected2 &&selected2[1]&& selected2[1].name || '空'}}
      {{selected2 &&selected2[2]&& selected2[2].name || '空'}}
    </div>
    <t-cascader
      :source.sync="source2"
      :selected.sync="selected2"
      height="200px" >
    </t-cascader>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
  import db from '../../../tests/fixtures/db'
  import TCascader from '../../../src/cascader/cascader'

  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = db.filter(item => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter((item) => {
            return item.parent_id == node.id
          }).length > 0) {
            node.isLeaf = false
          } else {
            node.isLeaf = true
          }
        })
        resolve(result)
      }, 1000)


    })
  }

  export default {
    components: {
      TCascader
    },
    data () {
      return {
        selected: [],
        source: [],
        selected2: [],
        source2 : [
          {
            name:'浙江',
            children:[
              {
                name: '杭州',
                children:[
                  {name:'上城'},
                  {name: '下城'},
                  {name: '江干'}
                ]

              },
              {name: '嘉兴'},
              {name: '湖州'}
            ]
          },
          {
            name:'福建',
            children:[
              {
                name: '福州',
                children:[
                  {name: '鼓楼区'},
                  {name: '台江区'},
                  {name: '仓山区'}
                ]
              },

            ]
          },
          {
            name:'安徽',
            children:[
              {
                name: '合肥',
                children:[
                  {name: '瑶海'},
                  {name: '庐阳'},
                  {name: '蜀山'}
                ]
              },

            ]
          }
        ],
        content: `
<t-cascader
  :source.sync="source"
  :selected.sync="selected"
  height="200px"
  :loadDate="loadDate">
</t-cascader>

// 传递给组件的获取数据函数，组件内部处理数据

loadDate({id}, cb) {
  ajax(id).then(result => {
    cb(result)
  })
}
        `,
        content2: `
<t-cascader
  :source.sync="source2"
  :selected.sync="selected2"
  height="200px">
</t-cascader>

// 声明静态数据

source2 : [
    {
        name:'浙江',
        children:[
            {
                name: '杭州',
                children:[
                    {name:'上城'},
                    {name: '下城'},
                    {name: '江干'}
                ]

            },
            {name: '嘉兴'},
            {name: '湖州'}
        ]
    },
    {
        name:'福建',
        children:[
            {
                name: '福州',
                children:[
                    {name: '鼓楼区'},
                    {name: '台江区'},
                    {name: '仓山区'}
                ]
            },

        ]
    },
    {
        name:'安徽',
        children:[
            {
                name: '合肥',
                children:[
                    {name: '瑶海'},
                    {name: '庐阳'},
                    {name: '蜀山'}
                ]
            },

        ]
    }
]
        `
      }
    },
    methods:{
      loadDate({id}, cb) {
        ajax(id).then(result => {
          cb(result)
        })
      }
    },
    created(){
      ajax(0).then(result => {
        this.source = result
      })
    }
  }
</script>
<style lang="scss" type="text/scss">
  body {
    .content:not(.custom) {
      max-width: 740px;
      margin: 0 auto;
      padding: 0;
    }
    .content:not(.custom) > h1:first-child{
      margin-top: 0;
    }
  }
</style>
