
import chai,{expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
chai.use(sinonChai)
import Col from '../../src/grid/col'

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    describe('Props', () => {
        it('接收 span 参数', () => {
            const wrapper = mount(Col,{
                propsData: {
                    span: 1
                }
            })
            const classes = wrapper.find('.col').classes()
            console.log(classes)
            expect(classes).include('col-1')
        })
        it('接收 offset 参数', () => {
                        const wrapper = mount(Col,{
                propsData: {
                    offset: 1
                }
            })
            const classes = wrapper.find('.col').classes()
            expect(classes).include('offset-1')
        })
        it('接收 pc 参数', () => {
            const wrapper = mount(Col, {
                propsData: {
                    pc: {span: 2, offset: 3}
                }
            })
            const classes = wrapper.find('.col').classes()
            expect(classes).include('offset-pc-3')
            expect(classes).include('col-pc-2')
        })
        it('接收 ipad 参数', () => {
            const wrapper = mount(Col, {
                propsData: {
                    ipad: {span: 2, offset: 3}
                }
            })
            const classes = wrapper.find('.col').classes()
            expect(classes).include('offset-ipad-3')
            expect(classes).include('col-ipad-2')
        })
        it('接收 narrow-pc 参数', () => {
            const wrapper = mount(Col, {
                propsData: {
                    narrowPc: {span: 2, offset: 3}
                }
            })
            const classes = wrapper.find('.col').classes()
            expect(classes).include('offset-narrow-pc-3')
            expect(classes).include('col-narrow-pc-2')
        })
        it('接收 wide-pc 参数', () => {
            const wrapper = mount(Col, {
                propsData: {
                    widePc: {span: 2, offset: 3}
                }
            })
            const classes = wrapper.find('.col').classes()
            expect(classes).include('offset-wide-pc-3')
            expect(classes).include('col-wide-pc-2')
        })

    })
})
