import Vue from 'vue'
import App from './App.vue'

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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
