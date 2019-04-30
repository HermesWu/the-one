<template>
  <div id="app">

    <!--nav 导航 demo-->

    <div>
    <t-nav :selected.sync="selected">
      <t-nav-item name="home">首页</t-nav-item>
      <t-sub-nav name="about">
        <template slot="title">关于</template>
        <t-nav-item name="culture">企业文化</t-nav-item>
        <t-nav-item name="developers">开发团队</t-nav-item>
        <t-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <t-nav-item name="wechat">微信</t-nav-item>
          <t-nav-item name="qq">qq</t-nav-item>
          <t-sub-nav name="phone">
            <template slot="title">手机</template>
            <t-nav-item name="cm">移动</t-nav-item>
            <t-nav-item name="cu">联通</t-nav-item>
            <t-nav-item name="cn">电信</t-nav-item>
          </t-sub-nav>
        </t-sub-nav>
      </t-sub-nav>
      <t-nav-item name="hire">招聘</t-nav-item>
    </t-nav>
  </div>
    <div>
      <t-nav :selected.sync="selected" vertical style="width:200px;margin:20px;margin-top:200px;">
        <t-nav-item name="home">首页</t-nav-item>
        <t-sub-nav name="about">
          <template slot="title">关于</template>
          <t-nav-item name="culture">企业文化</t-nav-item>
          <t-nav-item name="developers">开发团队</t-nav-item>
          <t-sub-nav name="contacts">
            <template slot="title">联系方式</template>
            <t-nav-item name="wechat">微信</t-nav-item>
            <t-nav-item name="qq">qq</t-nav-item>
            <t-sub-nav name="phone">
              <template slot="title">手机</template>
              <t-nav-item name="cm">移动</t-nav-item>
              <t-nav-item name="cu">联通</t-nav-item>
              <t-nav-item name="cn">电信</t-nav-item>
            </t-sub-nav>
          </t-sub-nav>
        </t-sub-nav>
        <t-nav-item name="hire">招聘</t-nav-item>
      </t-nav>
      <p>用户选择了{{selected}}</p>
    </div>

    <!--slide 轮播 demo-->

    <!--<t-slides  class="wrapper"  :selected.sync="selected">-->
      <!--<t-slides-item  name="1"><div class="box">1</div></t-slides-item>-->
      <!--<t-slides-item  name="2"><div class="box">2</div></t-slides-item>-->
      <!--<t-slides-item  name="3"><div class="box">3</div></t-slides-item>-->
    <!--</t-slides>-->

    <!--最初 demo-->

    <!--<div>-->

      <!--<img alt="Vue logo" src="./assets/logo.png">-->
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <!--<t-cascader :source.sync="source" :selected.sync="selected" height="200px" :loadDate="loadDate"></t-cascader>-->
      <!--<div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px; padding:5px;">-->

        <!--{{selected &&selected[0]&& selected[0].name || '空'}}-->
        <!--{{selected &&selected[1]&& selected[1].name || '空'}}-->
        <!--{{selected &&selected[2]&& selected[2].name || '空'}}-->
        <!--<t-cascader :source.sync="source" :selected.sync="selected" height="200px" :loadDate="loadDate"></t-cascader>-->
        <!--{{source}}-->
      <!--</div>-->
      <!--<g-collapse :selected.sync="selectedArray" single>-->
        <!--<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>-->
        <!--<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>-->
        <!--<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>-->
      <!--</g-collapse>-->
      <!--{{ selectedArray}}-->
      <!--<div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px;padding-top: 150px;padding-bottom: 40px;">-->
        <!--<g-popover>-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="bottom">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="right">-->
          <!--<template slot="content" slot-scope="{close}">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
            <!--<button @click="close">关闭</button>-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="left">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
      <!--</div>-->
      <!--<div style=" margin-bottom: 30px; min-height: 100px;padding-top: 150px;">-->
        <!--<g-popover trigger="hover">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="bottom" trigger="hover">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="right" trigger="hover">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
        <!--<g-popover position="left" trigger="hover">-->
          <!--<template slot="content">-->
            <!--propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa-->
          <!--</template>-->
          <!--<g-button>点我</g-button>-->
        <!--</g-popover>-->
      <!--</div>-->
      <!--<div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px">-->
        <!--<g-tabs :selected.sync="selectedTab">-->
          <!--<g-tabs-head>-->
            <!--<template slot="actions">-->
              <!--<button>设置</button>-->
            <!--</template>-->
            <!--<g-tabs-item name="women">美女</g-tabs-item>-->
            <!--<g-tabs-item name="finance">财经</g-tabs-item>-->
            <!--<g-tabs-item name="sports">体育</g-tabs-item>-->

          <!--</g-tabs-head>-->
          <!--<g-tabs-body>-->
            <!--<g-tabs-pane name="women">一位美女</g-tabs-pane>-->
            <!--<g-tabs-pane name="finance">财经新闻</g-tabs-pane>-->
            <!--<g-tabs-pane name="sports">体育频道</g-tabs-pane>-->
          <!--</g-tabs-body>-->
        <!--</g-tabs>-->
      <!--</div>-->
      <!--<div style=" border: 1px solid black;">-->
        <!--<button @click="showToast('top')">top</button>-->
        <!--<button @click="showToast('middle')">middle</button>-->
        <!--<button @click="showToast('bottom')">bottom</button>-->
      <!--</div>-->
      <!--<div style="height: 700px; border: 1px solid #ccc">-->
        <!--&lt;!&ndash;<g-layout style="height: 100vh">&ndash;&gt;-->
        <!--&lt;!&ndash;<g-header class="demo">header</g-header>&ndash;&gt;-->
        <!--&lt;!&ndash;<g-layout>&ndash;&gt;-->
        <!--&lt;!&ndash;<g-sider class="demo">sider</g-sider>&ndash;&gt;-->
        <!--&lt;!&ndash;<g-content class="demo">content</g-content>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-layout>&ndash;&gt;-->

        <!--&lt;!&ndash;<g-footer class="demo">footer</g-footer>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-layout>&ndash;&gt;-->
        <!--<g-layout style="height: 100vh">-->
          <!--<g-sider class="demo">sider</g-sider>-->
          <!--<g-layout>-->
            <!--<g-header class="demo">header</g-header>-->
            <!--<g-content class="demo">content</g-content>-->
            <!--<g-footer class="demo">footer</g-footer>-->
          <!--</g-layout>-->
        <!--</g-layout>-->


      <!--</div>-->
      <!--<div style=" border: 1px solid red;margin:30px">-->
        <!--&lt;!&ndash;<g-row gutter="20" >&ndash;&gt;-->
        <!--&lt;!&ndash;<g-col span="2">1</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;<g-col span="20" offset="2">2</g-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</g-row>&ndash;&gt;-->

        <!--<g-row gutter="20">-->
          <!--<g-col span="24"-->
                 <!--:ipad="{span:12, offset:3}"-->
                 <!--:narrow-pc="{span:8}"-->
                 <!--:pc="{span:6}"-->
                 <!--:wide-pc="{span:4}">-->
            <!--<div class="demo"></div>-->
          <!--</g-col>-->
          <!--<g-col span="24"-->
                 <!--:ipad="{span:12}"-->
                 <!--:narrow-pc="{span:8}"-->
                 <!--:pc="{span:6}"-->
                 <!--:wide-pc="{span:4}">-->
            <!--<div class="demo"></div>-->
          <!--</g-col>-->
          <!--<g-col span="24"-->
                 <!--:ipad="{span:12}"-->
                 <!--:narrow-pc="{span:8}"-->
                 <!--:pc="{span:6}"-->
                 <!--:wide-pc="{span:4}">-->
            <!--<div class="demo"></div>-->
          <!--</g-col>-->
          <!--<g-col span="24"-->
                 <!--:ipad="{span:12}"-->
                 <!--:narrow-pc="{span:8}"-->
                 <!--:pc="{span:6}"-->
                 <!--:wide-pc="{span:4}">-->
            <!--<div class="demo"></div>-->
          <!--</g-col>-->

        <!--</g-row>-->

      <!--</div>-->

      <!--<div>-->
        <!--<g-row gutter="20">-->
          <!--<g-col span="12">1</g-col>-->
          <!--<g-col span="12">2</g-col>-->
        <!--</g-row>-->
      <!--</div>-->

      <!--<g-input value="张三" :disabled="true"></g-input>-->
      <!--<g-input value="李四" :readonly="true"></g-input>-->
      <!--<g-input value="王五" @change="inputChange"></g-input>-->
      <!--<div style="margin-top: 20px;">-->
        <!--<g-button>按钮</g-button>-->
        <!--<g-button icon="settings" :loading="loading1" icon-position="left" @click="loading1 = !loading1">按钮</g-button>-->
        <!--<g-button icon="settings" icon-position="right">按钮</g-button>-->
        <!--<g-button-group>-->
          <!--<g-button icon="left">上一页</g-button>-->
          <!--<g-button> 更多</g-button>-->
          <!--<g-button icon="right" icon-position="right">下一页</g-button>-->
        <!--</g-button-group>-->
      <!--</div>-->


    <!--</div>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import db from '../tests/fixtures/db'
  import TSlides from './slides/slides'
  import TSlidesItem from './slides/slides-item'
  import TNav from './nav/nav'
  import TNavItem from './nav/nav-item'
  import TSubNav from './nav/sub-nav'

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
    name: 'app',
    components: {
      HelloWorld,
      TSlides,
      TSlidesItem,
      TNav,
      TNavItem,
      TSubNav
    },
    data() {
      return {
        // selected: [], // cascader
        // loading1: false,
        // loading2: true,
        // loading3: false,
        // selectedTab: 'sports',
        // selectedArray: ['1', '2'],
        // source: [],
        // selected: undefined // slides
        selected: 'developers' // nav 导航
      }
    },
    methods: {
      showToast(s) {
        this.$toast(`你的智商值为${parseInt(Math.random() * 100)}, 你的智商需要充值！`,
          {
            position: s,
            enableHtml: false,
            closeButton: {
              text: '知道了',
              callback: (toast) => {
                toast.log()
                console.log('用户关闭了 toast')
              }
            }

          }
        )
      },
      inputChange(e) {
        console.log('1', e)
      },
      loadDate({id}, cb) {
        ajax(id).then(result => {
          cb(result)
        })
      }
    },
    created() {
      ajax(0).then(result => {
        this.source = result
      })
      // this.source = [
      //     {
      //         name:'浙江',
      //         children:[
      //             {
      //                 name: '杭州',
      //                 children:[
      //                     {name:'上城'},
      //                     {name: '下城'},
      //                     {name: '江干'}
      //                 ]
      //
      //             },
      //             {name: '嘉兴'},
      //             {name: '湖州'}
      //         ]
      //     },
      //     {
      //         name:'福建',
      //         children:[
      //             {
      //                 name: '福州',
      //                 children:[
      //                     {name: '鼓楼区'},
      //                     {name: '台江区'},
      //                     {name: '仓山区'}
      //                 ]
      //             },
      //
      //         ]
      //     },
      //     {
      //         name:'安徽',
      //         children:[
      //             {
      //                 name: '合肥',
      //                 children:[
      //                     {name: '瑶海'},
      //                     {name: '庐阳'},
      //                     {name: '蜀山'}
      //                 ]
      //             },
      //
      //         ]
      //     }
      // ]
    },
    mounted(){
      // setTimeout(()=>{
      //   this.selected = '2'
      //   console.log('selected', this.selected)
      // },3000)
    }
  }
</script>

<style >
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  /*}*/

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /*img {max-width: 100%;}*/

  /*html {--font-size: 14px;}*/

  /*body {*/
    /*font-size: var(--font-size);*/
  /*}*/

  /*.demo {*/
    /*background: #ddd;*/
    /*border: 1px solid #666;*/
    /*min-height: 100px;*/
  /*}*/
  .wrapper{
    margin: 40px;
  }
  .box{
    /*width: 600px;*/
    min-width: 100%;
    height: 350px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
