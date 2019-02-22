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

chai.use(spies)

const expect = chai.expect

new Vue({
    el:'#app',
    data:{
        loading1: false,
        loading2: true,
        loading3: false
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})
