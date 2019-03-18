const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    describe('Props', () => {
        Vue.component('g-popover', Popover)
        it('接受 position', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
               <g-popover position="bottom" ref="a">
                    <template slot="content">
                        propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
                    </template>
                    <button>点我</button>
                </g-popover>
                `
            const vm = new Vue({
                el: div
            })
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=>{
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
            })

        })
        it('接受 trigger', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
               <g-popover position="bottom" ref="a" trigger="hover">
                    <template slot="content">
                        propfadsfadsfasfasfasfasfasfafasfasfasfasfasfsfasfa
                    </template>
                    <button>点我</button>
                </g-popover>
                `
            const vm = new Vue({
                el: div
            })
            let event = new Event('mouseenter')
            let popover = vm.$el.querySelector('.popover')
            popover.dispatchEvent(event)
            vm.$nextTick(()=>{
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
            })

        })
    })

})
