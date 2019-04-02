import  chai,{expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Popover from '../../src/popover/popover'

chai.use(sinonChai)

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    describe('Props', () => {
        it('接受 position', () => {
            const wrapper = mount(Popover,{
                slots:{
                    default:"template:'<button>点我</button>'",
                    content:'弹出内容'
                },
                propsData:{
                    position:'bottom'
                }
            })
            wrapper.find('button').trigger('click')
            const classes = wrapper.find('.content-wrapper').classes()
            expect(classes).include('position-bottom')
        })
        it('接受 trigger', () => {
           const wrapper= mount(Popover, {
               slots:{
                   default:"template:'<button>点我</button>'",
                   content:'弹出内容'
               },
               propsData:{
                   position: 'bottom',
                   trigger:'hover'
               },

           })
            expect(wrapper.find('.content-wrapper').element).to.not.exist
            wrapper.find('.popover').trigger('mouseenter')
            expect(wrapper.find('.content-wrapper').element).to.exist
        })
    })

})
