const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'

Vue.component('g-icon', Icon)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    describe('Props', () => {
        it('接受 selected', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                <g-tabs selected="finance" >
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
                `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(()=>{
                let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
                expect(x.classList.contains('active')).to.be.true
            })

        })

        // const Constructor = Vue.extend(Row)
        // let vm
        // it('接收 gutter 属性', (done) => {
        //     Vue.component('g-row', Row)
        //     Vue.component('g-col', Col)
        //     const div = document.createElement('div')
        //     document.body.appendChild(div)
        //     div.innerHTML = `
        //         <g-row gutter="20">
        //             <g-col span="12"></g-col>
        //             <g-col span="12"></g-col>
        //         </g-row>
        //     `
        //
        //     const vm = new Vue({
        //         el: div
        //     })
        //     setTimeout(()=>{
        //         const rowElement = vm.$el.querySelector('.row')
        //         expect(getComputedStyle(rowElement).marginRight).to.eq('-10px')
        //         expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px')
        //         const colElement = vm.$el.querySelectorAll('.col')
        //         expect(getComputedStyle(colElement[0]).paddingRight).to.eq('10px')
        //         expect(getComputedStyle(colElement[1]).paddingLeft).to.eq('10px')
        //         done()
        //         vm.$el.remove()
        //         vm.$destroy()
        //     },1000)
        // })
        // it('接受 align', () => {
        //     const div = document.createElement('div')
        //     document.body.appendChild(div)
        //     vm = new Constructor({
        //         propsData: {
        //             gutter: 20,
        //             align: 'left'
        //         }
        //     }).$mount(div)
        //     const row = vm.$el
        //     expect(getComputedStyle(row).justifyContent).to.eq('flex-start')
        //     div.remove()
        //     vm.$destroy()
        // })
    })
})

