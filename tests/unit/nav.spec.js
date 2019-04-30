import chai,{expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Nav from '@/nav/nav'
import NavItem from '@/nav/nav-item'
import SubNav from '@/nav/sub-nav'

Vue.component('t-nav', Nav)
Vue.component('t-nav-item', NavItem)
Vue.component('t-sub-nav', SubNav)

chai.use(sinonChai)

describe('Nav', () => {
  it('Nav 存在.', () => {
    expect(Nav).to.be.ok
  })
  describe('Nav 接受props', ()=>{
    it('接受 selected 属性', (done)=>{
      const wrapper = mount(Nav,{
        propsData: {
          selected: 'home'
        },
        slots:{
          default:`
            <t-nav-item name="home">首页</t-nav-item>
            <t-sub-nav name="about">
              <template slot="title">关于</template>
              <t-nav-item name="culture">企业文化</t-nav-item>
              <t-nav-item name="developers">开发团队</t-nav-item>
              <t-sub-nav name="contacts">
                <template slot="title">联系方式</template>
                <t-nav-item name="wechat">微信</t-nav-item>
                <t-nav-item name="qq">qq</t-nav-item>
                <t-sub-nav name="phone">
                  <template slot="title">手机</template>
                  <t-nav-item name="cm">移动</t-nav-item>
                  <t-nav-item name="cu">联通</t-nav-item>
                  <t-nav-item name="cn">电信</t-nav-item>
                </t-sub-nav>
              </t-sub-nav>
            </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
          `
        }
      })


      setTimeout(()=>{
        expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
        done()
      }, 0)
    })
    it('可以触发update:selected事件', ()=>{
      let callback = sinon.fake();
      const wrapper = mount(Nav,{
        propsData: {
          selected: 'home'
        },

        slots:{
          default:`
            <t-nav-item name="home">首页</t-nav-item>
            <t-sub-nav name="about">
              <template slot="title">关于</template>
              <t-nav-item name="culture">企业文化</t-nav-item>
              <t-nav-item name="developers">开发团队</t-nav-item>
              <t-sub-nav name="contacts">
                <template slot="title">联系方式</template>
                <t-nav-item name="wechat">微信</t-nav-item>
                <t-nav-item name="qq">qq</t-nav-item>
                <t-sub-nav name="phone">
                  <template slot="title">手机</template>
                  <t-nav-item name="cm">移动</t-nav-item>
                  <t-nav-item name="cu">联通</t-nav-item>
                  <t-nav-item name="cn">电信</t-nav-item>
                </t-sub-nav>
              </t-sub-nav>
            </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
          `
        },
        listeners: {
          'update:selected': callback
        },
      })
      wrapper.find('[data-name="developers"]').trigger('click')
      expect(callback).to.have.been.calledWith('developers')
    })
  })
})
