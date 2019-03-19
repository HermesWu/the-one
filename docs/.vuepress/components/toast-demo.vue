<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <h3>this.$toast</h3>
    <p>
      <strong>预览</strong>
    </p>
    <button @click="$toast('弹出的提示信息, 默认在顶部')">Top</button>
    <button @click="$toast('弹出的提示信息,位置在中间',{position: 'middle'})">Middle</button>
    <button @click="$toast('弹出的提示信息，位置在底部',{position: 'bottom'})">Bottom</button>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h3>设置关闭按钮</h3>
    <p>
      <strong>预览</strong>
    </p>
    <button @click="showToast">Top</button>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
    <h3>支持HTML</h3>
    <p>
      <strong>预览</strong>
    </p>
    <button @click="showToast2">Top</button>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
  import Plugin from '../../../src/plugin'
  import Vue from 'vue'
  Vue.use(Plugin)

  export default {

    data() {
      return {
        value: '中文',
        content: `
          <button @click="$toast('弹出的提示信息, 默认在顶部')">Top</button>
          <button @click="$toast('弹出的提示信息,位置在中间',{position: 'middle'})">Middle</button>
          <button @click="$toast('弹出的提示信息，位置在底部',{position: 'bottom'})">Bottom</button>
        `.replace(/^ {8}/gm, '').trim(),
        content2: `
          <button @click="showToast">Top</button>

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
        `.replace(/^ {8}/gm, '').trim(),
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
          },
        `.replace(/^ {8}/gm, '').trim(),
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