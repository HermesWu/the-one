<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px; padding:5px;" >
      <p>11111</p>
      <t-cascader :source="source" height="200px"></t-cascader>
      <p>22222</p>

    </div>
    <g-collapse :selected.sync="selectedArray" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    {{ selectedArray}}
    <div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px;padding-top: 150px;padding-bottom: 40px;"  >
      <g-popover>
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="bottom">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right">
        <template slot="content" slot-scope="{close}">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
          <button @click="close">关闭</button>
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div style=" margin-bottom: 30px; min-height: 100px;padding-top: 150px;"  >
      <g-popover trigger="hover">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="bottom"  trigger="hover">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
        </template>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div style=" border: 1px solid black; margin-bottom: 30px; min-height: 100px"  >
      <g-tabs :selected.sync="selectedTab" >
        <g-tabs-head>
          <template slot="actions"><button>设置</button></template>
          <g-tabs-item name="women">美女</g-tabs-item>
          <g-tabs-item name="finance">财经</g-tabs-item>
          <g-tabs-item name="sports">体育</g-tabs-item>

        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="women">一位美女</g-tabs-pane>
          <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
          <g-tabs-pane name="sports">体育频道</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <div style=" border: 1px solid black;">
      <button @click="showToast('top')">top</button>
      <button @click="showToast('middle')">middle</button>
      <button @click="showToast('bottom')">bottom</button>
    </div>
    <div style="height: 700px; border: 1px solid #ccc">
      <!--<g-layout style="height: 100vh">-->
      <!--<g-header class="demo">header</g-header>-->
      <!--<g-layout>-->
      <!--<g-sider class="demo">sider</g-sider>-->
      <!--<g-content class="demo">content</g-content>-->
      <!--</g-layout>-->

      <!--<g-footer class="demo">footer</g-footer>-->
      <!--</g-layout>-->
      <g-layout style="height: 100vh">
        <g-sider class="demo">sider</g-sider>
        <g-layout>
          <g-header class="demo">header</g-header>
          <g-content class="demo">content</g-content>
          <g-footer class="demo">footer</g-footer>
        </g-layout>
      </g-layout>


    </div>
    <div style=" border: 1px solid black;">
      <!--<g-row gutter="20" >-->
      <!--<g-col span="2">1</g-col>-->
      <!--<g-col span="20" offset="2">2</g-col>-->
      <!--</g-row>-->
      <g-row>
        <g-col span="24"
               :ipad="{span:12, offset:3}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24"
               :ipad="{span:12}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24"
               :ipad="{span:12}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24"
               :ipad="{span:12}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24"
               :ipad="{span:12}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24"
               :ipad="{span:12}"
               :narrow-pc="{span:8}"
               :pc="{span:6}"
               :wide-pc="{span:4}">
          <div class="demo"></div>
        </g-col>
      </g-row>
    </div>

    <g-input value="张三" :disabled="true"></g-input>
    <g-input value="李四" :readonly="true"></g-input>
    <g-input value="王五"  @change="inputChange"></g-input>
    <div style="margin-top: 20px;">
      <g-button>按钮</g-button>
      <g-button icon="settings" :loading="loading1" icon-position="left" @click="loading1 = !loading1">按钮</g-button>
      <g-button icon="settings" icon-position="right">按钮</g-button>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button> 更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
      return {
          loading1: false,
          loading2: true,
          loading3: false,
          selectedTab: 'sports',
          selectedArray:['1','2'],
          source:[
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
      }
  },
    methods:{
        showToast(s){
            this.$toast(`你的智商值为${parseInt(Math.random()*100)}, 你的智商需要充值！`,
                {
                    position: s,
                    enableHtml: false,
                    closeButton:{
                        text: '知道了',
                        callback: (toast) => {
                            toast.log()
                            console.log('用户关闭了 toast')
                        }
                    }

                }
            )
        },
        inputChange(e){
            console.log('1',e)
        }
    },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img{max-width: 100%;}
html{--font-size: 14px;}
body{
  font-size:var(--font-size);
}
.demo {
  background: #ddd;
  border: 1px solid #666;
  min-height: 100px;
}
</style>
