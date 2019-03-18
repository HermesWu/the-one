import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Sider from './layout/sider'
import Content from './layout/content'
import Header from './layout/header'
import Footer from './layout/footer'
import Plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

import chai from 'chai'
import spies from 'chai-spies'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

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
        selectedArray:['1','2']
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
            console.log(e.target.value)
        }
    }
})
