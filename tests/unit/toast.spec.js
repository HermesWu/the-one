import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Toast from '../../src/toast/toast'
chai.use(sinonChai)

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props',()=>{
        it('接受 autoClose', ()=>{
            const wrapper = mount(Toast,{
                propsData:{
                    autoClose: 1,
                }
            })
            const {vm} = wrapper
            vm.$on('close', ()=>{
                expect(document.body.contains(vm.$el)).to.equal(false)
            })
        })
        it('接受 closeButton', ()=>{
            let callback = sinon.fake();
            const wrapper = mount(Toast,{
                propsData:{
                    closeButton:{
                        text:'关闭了',
                        callback
                    }
                }
            })
            const {vm} = wrapper
            let closeButton = vm.$el.querySelector('.close')
            closeButton.click()
            expect(closeButton.textContent.trim()).to.eq('关闭了')
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml', ()=>{
            const wrapper = mount(Toast,{
                slots:{
                    default:'<strong id="test">hi</strong>'
                },
                propsData:{
                    propsData:{
                        enableHtml: true
                    }
                }
            })
            const {vm} = wrapper
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', ()=>{

            const wrapper = mount(Toast,{
                slots:{
                    default:'<strong id="test">hi</strong>'
                },
                propsData:{
                    position: 'bottom'
                }
            })
            const {vm} = wrapper
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})