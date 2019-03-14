const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-icon', Icon)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    describe('Props', () => {
        it('接受 disabled', () => {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData:{
                    disabled: true,
                    name: 'onClick'
                }
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.be.true
            const callback = sinon.fake();
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })
        it('接受 name', ()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData:{
                    name: 'sports'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('sports')
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