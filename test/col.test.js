import Input from "../src/input";

const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    describe('Props', () => {
        it('接收 span 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    span: 1
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-1')).to.eq(true)
            div.remove()
            vm.$destroy()
        })
        it('接收 offset 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    offset: 1
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-1')).to.eq(true)
            div.remove()
            vm.$destroy()
        })
        it('接收 pc 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    pc: {span: 2, offset: 3}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-pc-3')).to.eq(true)
            expect(element.classList.contains('col-pc-2')).to.eq(true)
            div.remove()
            vm.$destroy()
        })
        it('接收 ipad 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    ipad: {span: 2, offset: 3}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-ipad-3')).to.eq(true)
            expect(element.classList.contains('col-ipad-2')).to.eq(true)
            div.remove()
            vm.$destroy()
        })
        it('接收 narrow-pc 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    narrowPc: {span: 2, offset: 3}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-narrow-pc-3')).to.eq(true)
            expect(element.classList.contains('col-narrow-pc-2')).to.eq(true)
            div.remove()
            vm.$destroy()
        })
        it('接收 wide-pc 参数', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Col)
            const vm = new Constructor({
                propsData: {
                    widePc: {span: 2, offset: 3}
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-wide-pc-3')).to.eq(true)
            expect(element.classList.contains('col-wide-pc-2')).to.eq(true)
            div.remove()
            vm.$destroy()
        })

    })
})
