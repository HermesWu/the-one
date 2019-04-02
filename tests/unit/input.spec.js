import  chai,{expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Input from '../../src/input/input'

chai.use(sinonChai)


describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })


    describe('props', () => {
        it('接收 value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '1234'
                }
            })
            const {vm} = wrapper
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接收 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            const {vm} = wrapper
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            })
            const {vm} = wrapper
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('接收 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: '你错了'
                }
            })
            const {vm} = wrapper
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = wrapper.find('.errorMessage')
            console.log(errorMessage.text())
            expect(errorMessage.text()).to.equal('你错了')
        })
    })
    describe('事件', () => {
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    const wrapper = mount(Input)
                    const {vm} = wrapper
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                    //触发input的change 事件
                    let event = new Event(eventName);
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hi'}, enumerable: true
                        }
                    )
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith('hi')
                })
        })
    })
})