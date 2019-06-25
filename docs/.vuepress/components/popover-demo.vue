<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <h3>支持 HTML</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-popover>
      <t-button>TOP</t-button>
      <template slot="content">
        我的小鱼你醒了，还认识早晨吗？
      </template>
    </t-popover>
    <t-popover position="bottom">
      <t-button>Bottom</t-button>
      <template slot="content">
        昨夜你曾经说，愿夜幕永不开启。
      </template>
    </t-popover>
    <t-popover position="left">
      <t-button>Left</t-button>
      <template slot="content">
        你的香腮边轻轻滑落的
      </template>
    </t-popover>
    <t-popover position="right">
      <t-button>Right</t-button>
      <template slot="content">
        是你的泪，还是我的泪？
      </template>
    </t-popover>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h3>Hover 触发弹出层</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-popover trigger="hover">
      <t-button>TOP</t-button>
      <template slot="content">
        我的小鱼你醒了，还认识早晨吗？
      </template>
    </t-popover>
    <t-popover trigger="hover" position="bottom">
      <t-button>Bottom</t-button>
      <template slot="content">
        昨夜你曾经说，愿夜幕永不开启。
      </template>
    </t-popover>
    <t-popover trigger="hover" position="left">
      <t-button>Left</t-button>
      <template slot="content">
        你的香腮边轻轻滑落的
      </template>
    </t-popover>
    <t-popover trigger="hover" position="right">
      <t-button>Right</t-button>
      <template slot="content">
        是你的泪，还是我的泪？
      </template>
    </t-popover>
    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
  import TPopover from '../../../src/popover/popover'
  import TButton from '../../../src/button/button'

  export default {
    components:{
        TPopover,
        TButton
    },
    data() {
      return {
        value: '中文',
        content: `
<t-popover>
  <t-button>TOP</t-button>
  <template slot="content">
    我的小鱼你醒了，还认识早晨吗？
  </template>
</t-popover>
<t-popover position="bottom">
  <t-button>Bottom</t-button>
  <template slot="content">
    昨夜你曾经说，愿夜幕永不开启。
  </template>
</t-popover>
<t-popover position="left">
  <t-button>Left</t-button>
  <template slot="content">
    你的香腮边轻轻滑落的
  </template>
</t-popover>
<t-popover position="right">
  <t-button>Right</t-button>
  <template slot="content">
    是你的泪，还是我的泪？
  </template>
</t-popover>
        `,
        content2: `
<t-popover trigger="hover">
  <t-button>TOP</t-button>
  <template slot="content">
    我的小鱼你醒了，还认识早晨吗？
  </template>
</t-popover>
<t-popover trigger="hover" position="bottom">
  <t-button>Bottom</t-button>
  <template slot="content">
    昨夜你曾经说，愿夜幕永不开启。
  </template>
</t-popover>
<t-popover trigger="hover" position="left">
  <t-button>Left</t-button>
  <template slot="content">
    你的香腮边轻轻滑落的
  </template>
</t-popover>
<t-popover trigger="hover" position="right">
  <t-button>Right</t-button>
  <template slot="content">
    是你的泪，还是我的泪？
  </template>
</t-popover>
        `,
        content3: `
<button @click="showToast">Top</button>

showToast(){
  this.$toast(<strong style="color:red;">我的小鱼你醒了，还认识早晨吗？</strong>,
    {
      enableHtml: false,
      closeButton:{
        text: '认识',
        callback: (toast) => {
            console.log('昨夜你曾经说，愿夜幕永不开启。')
        }
      }
    }
  )
}
        `,
      }
    },
    methods:{
        showToast2(){
            this.$toast(<strong style="color:red;">我的小鱼你醒了，还认识早晨吗？</strong>,
                {
                    closeButton:{
                        text: '认识',
                        callback: (toast) => {
                            console.log('昨夜你曾经说，愿夜幕永不开启。')
                        }
                    }

                }
            )
        },
        showToast(){
            this.$toast('我的小鱼你醒了，还认识早晨吗？',
            {
                enableHtml: false,
                closeButton:{
                    text: '认识',
                        callback: (toast) => {
                        console.log('昨夜你曾经说，愿夜幕永不开启。')
                    }
                }

            }
        )
        },
        inputChange(e){
            console.log('1',e)
        }
    }
  }
</script>
<style lang="scss">

</style>
