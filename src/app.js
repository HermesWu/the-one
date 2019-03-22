import Button from './button/button'
import ButtonGroup from './button/button-group'
import Col from './grid/col'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Content from './layout/content'
import Cascader from './cascader/cascader'
import Footer from './layout/footer'
import Header from './layout/header'
import Icon from './icon'
import Input from './input/input'
import Layout from './layout/layout'
import Plugin from './plugin'
import Popover from './popover/popover'
import Row from './grid/row'
import Sider from './layout/sider'
import Tabs from './tabs/tabs'
import TabsBody from './tabs/tabs-body'
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Vue from 'vue'

import chai from 'chai'
import spies from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-col', Col)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-content', Content)
Vue.component('t-cascader', Cascader)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-popover', Popover)
Vue.component('g-row', Row)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.use(Plugin)

chai.use(spies)

const expect = chai.expect

new Vue({
    el:'#app',
    data:{
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
    },
    created(){
        // 触发 this.$emit('update:selected')
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
    }
})
