<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <h3>单选 模式</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-collapse :selected.sync="selectedArray" single>
      <t-collapse-item title="我的小鱼你醒了，还认识早晨吗？" name="1">昨夜你曾经说，愿夜幕永不开启。你的香腮边轻轻滑落的 是你的泪，还是我的泪？</t-collapse-item>
      <t-collapse-item title="初吻吻别的那个季节，不是已经哭过了嘛？" name="2">我的指尖还记忆着，你慌乱的心跳</t-collapse-item>
      <t-collapse-item title="温柔的体香里，那一绺长发飘飘" name="3">《魁拔》</t-collapse-item>
    </t-collapse>
    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h3>多选 模式</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-collapse :selected.sync="selectedArray">
      <t-collapse-item title="我的小鱼你醒了，还认识早晨吗？" name="1">昨夜你曾经说，愿夜幕永不开启。你的香腮边轻轻滑落的 是你的泪，还是我的泪？</t-collapse-item>
      <t-collapse-item title="初吻吻别的那个季节，不是已经哭过了嘛？" name="2">我的指尖还记忆着，你慌乱的心跳</t-collapse-item>
      <t-collapse-item title="温柔的体香里，那一绺长发飘飘" name="3">《魁拔》</t-collapse-item>
    </t-collapse>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src//collapse/collapse-item'
  export default {
    components: {
      't-collapse': Collapse,
      't-collapse-item': CollapseItem
    },
    data () {
      return {
        selectedArray: [], // collapse,
        content: `
<t-collapse :selected.sync="selectedArray" single>
   <t-collapse-item title="我的小鱼你醒了，还认识早晨吗？" name="1">
   昨夜你曾经说，愿夜幕永不开启。
   你的香腮边轻轻滑落的 是你的泪，还是我的泪？
  </t-collapse-item>
  <t-collapse-item title="初吻吻别的那个季节，不是已经哭过了嘛？" name="2">
  我的指尖还记忆着，你慌乱的心跳
  </t-collapse-item>
  <t-collapse-item title="温柔的体香里，那一绺长发飘飘" name="3">
  《魁拔》
  </t-collapse-item>
</t-collapse>
              `,
        content2: `
<t-collapse :selected.sync="selectedArray">
   <t-collapse-item title="我的小鱼你醒了，还认识早晨吗？" name="1">
   昨夜你曾经说，愿夜幕永不开启。
   你的香腮边轻轻滑落的 是你的泪，还是我的泪？
  </t-collapse-item>
  <t-collapse-item title="初吻吻别的那个季节，不是已经哭过了嘛？" name="2">
  我的指尖还记忆着，你慌乱的心跳
  </t-collapse-item>
  <t-collapse-item title="温柔的体香里，那一绺长发飘飘" name="3">
  《魁拔》
  </t-collapse-item>
</t-collapse>
              `
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
  }
</script>
<style lang="scss" type="text/scss">
  /*body {*/
    /*.content:not(.custom) {*/
      /*max-width: 740px;*/
      /*margin: 0 auto;*/
      /*padding: 0 ;*/
    /*}*/
    /*.content:not(.custom) > h1:first-child{*/
      /*margin-top: 0;*/
    /*}*/
  /*}*/
</style>
