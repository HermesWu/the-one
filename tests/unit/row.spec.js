
import chai,{expect} from 'chai'
import {shallowMount,mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from 'vue'
import Row from '../../src/grid/row'
import Col from "../../src/grid/col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    describe('Props', () => {
        const Constructor = Vue.extend(Row)
        let vm
        it('接收 gutter 属性', () => {
            Vue.component('g-row', Row)
            Vue.component('g-col', Col)

            const wrapper = mount(Row,{
                slots:{
                    default:
                      `
                <g-row gutter="20">
                    <g-col span="12">1</g-col>
                    <g-col span="12">2</g-col>
                </g-row>
            `
                },
              propsData:{
                  gutter: '20'
              }
            })
            const {vm} = wrapper
            const rowElement = vm.$el.querySelector('.row')
            expect(getComputedStyle(rowElement).marginRight).to.eq('-10px')
            expect(getComputedStyle(rowElement).marginLeft).to.eq('-10px')
            const colElement = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(colElement[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(colElement[1]).paddingLeft).to.eq('10px')
        })
        xit('接受 align', () => {
          const wrapper = mount(Row,{
            slots:{
              default:
                `
                <g-row gutter="20">
                    <g-col span="12">1</g-col>
                    <g-col span="12">2</g-col>
                </g-row>
            `
            },
            propsData: {
              gutter: '20',
              align: 'left'
            }
          })
          const {vm} = wrapper
          const row = vm.$el.querySelector('.row')
          // const row = vm.$el
          console.log(111,getComputedStyle(row))
          expect(getComputedStyle(row).justifyContent).to.eq('flex-start')
            div.remove()
          vm.$destroy()
        })
    })
})
