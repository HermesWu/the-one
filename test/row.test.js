
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from "../src/col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    describe('Props', () => {
        const Constructor = Vue.extend(Row)
        let vm
        // afterEach(() => {
        //     vm.$destroy()
        // })
        // it('接收 gutter', () => {
        //     const div = document.createElement('div')
        //     document.body.appendChild(div)
        //     vm = new Constructor({
        //         propsData: {
        //             gutter: 20
        //         }
        //     }).$mount(div)
        //     const row = vm.$el
        //     console.log('111111',vm.$el)
        //     expect(getComputedStyle(row).marginRight).to.eq('-10px')
        // })
        it('接收 gutter 属性', (done) => {
            Vue.component('g-row', Row)
            Vue.component('g-col', Col)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                <g-row gutter="20">
                    <g-col span="12"></g-col>
                    <g-col span="12"></g-col>
                </g-row>
            `

            const vm = new Vue({
                el: div
            })
            setTimeout(()=>{
                const rowElement = vm.$el.querySelector('.row')
                expect(getComputedStyle(rowElement).marginRight).to.eq('-10px')
                expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px')
                const colElement = vm.$el.querySelectorAll('.col')
                expect(getComputedStyle(colElement[0]).paddingRight).to.eq('10px')
                expect(getComputedStyle(colElement[1]).paddingLeft).to.eq('10px')
                done()
                vm.$el.remove()
                vm.$destroy()
            },1000)
        })
        it('接受 align', () => {
          const div = document.createElement('div')
          document.body.appendChild(div)
          vm = new Constructor({
              propsData: {
                  gutter: 20,
                  align: 'left'
              }
          }).$mount(div)
          const row = vm.$el
          expect(getComputedStyle(row).justifyContent).to.eq('flex-start')
            div.remove()
          vm.$destroy()
        })
    })
})
