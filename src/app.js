import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'

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

Vue.use(Plugin)

chai.use(spies)

const expect = chai.expect

new Vue({
    el:'#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false,
        selectedTab: 'sports'
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
