import chai,{expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Slides from '@/slides/slides'
import SlidesItem from '@/slides/slides-item'
import vue from 'vue'

chai.use(sinonChai)
vue.component('TSlidesItem', SlidesItem)


describe('Slides', () => {
  it('存在.', () => {
    expect(Slides).to.be.ok
  })
  describe('props', ()=>{
    it('默认展示第一个', ()=>{
      const wrapper = mount(Slides, {
        propsData:{
          autoPlay: false
        },
        slots: {
          default: `
          <t-slides  class="wrapper"  >
            <t-slides-item  name="1"><div class="box1">1</div></t-slides-item>
            <t-slides-item  name="2"><div class="box2">2</div></t-slides-item>
            <t-slides-item  name="3"><div class="box3">3</div></t-slides-item>
          </t-slides>
          `
        }
      })
      setTimeout(()=>{
        expect(wrapper.find('.box1').exists()).to.be.true
      })
    })
    it('selected是几 第几个被选中', ()=>{
      const wrapper = mount(Slides, {
        propsData:{
          autoPlay: false,
          selected: '2'
        },
        slots: {
          default: `
          <t-slides  class="wrapper"  >
            <t-slides-item  name="1"><div class="box1">1</div></t-slides-item>
            <t-slides-item  name="2"><div class="box2">2</div></t-slides-item>
            <t-slides-item  name="3"><div class="box3">3</div></t-slides-item>
          </t-slides>
          `
        }
      })
      setTimeout(()=>{

        expect(wrapper.find('.box2').exists()).to.be.true
      })
    })
    it('点击第二个 展示第二个', ()=>{
      const wrapper = mount(Slides, {
        propsData:{
          autoPlay: false,
        },
        listeners:{
          'update:selected':(x)=>{
            expect(x).to.eq('2')
          }
        },
        slots: {
          default: `
          <t-slides  class="wrapper"  >
            <t-slides-item  name="1"><div class="box1">1</div></t-slides-item>
            <t-slides-item  name="2"><div class="box2">2</div></t-slides-item>
            <t-slides-item  name="3"><div class="box3">3</div></t-slides-item>
          </t-slides>
          `
        }
      })
      wrapper.find('[data-index="1"]').trigger('click')
      // setTimeout(()=>{
      //   console.log(wrapper.html());
      //   expect(wrapper.find('.box1').exists()).to.be.true
      // })
    })
  })
  xit('自动播放', ()=>{
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData:{
        autoPlay: true,
        autoPlayDelay: 20
      },
      listeners:{
        'update:selected':callback
      },
      slots: {
        default: `
          <t-slides  class="wrapper"  >
            <t-slides-item  name="1"><div class="box1">1</div></t-slides-item>
            <t-slides-item  name="2"><div class="box2">2</div></t-slides-item>
            <t-slides-item  name="3"><div class="box3">3</div></t-slides-item>
          </t-slides>
          `
      }
    })
    setTimeout(()=>{
      expect(callback).to.have.been.called
      expect(callback).to.have.been.calledWith('2')
    }, 21)
  })
})
