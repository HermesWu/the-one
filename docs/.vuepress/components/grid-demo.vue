<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <h3>24网格</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-row class="demoRow">
      <t-col span="2"><div class="demoCol">2</div></t-col>
      <t-col span="22"><div class="demoCol">22</div></t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="8"><div class="demoCol">8</div></t-col>
      <t-col span="8"><div class="demoCol">8</div></t-col>
      <t-col span="8"><div class="demoCol">8</div></t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="12"><div class="demoCol">12</div></t-col>
      <t-col span="12"><div class="demoCol">12</div></t-col>
    </t-row>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <h3>设置 gutter</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-row class="demoRow" gutter="10">
      <t-col span="2"><div class="demoCol">2</div></t-col>
      <t-col span="22"><div class="demoCol">22</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="8"><div class="demoCol">8</div></t-col>
      <t-col span="8"><div class="demoCol">8</div></t-col>
      <t-col span="8"><div class="demoCol">8</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="12"><div class="demoCol">12</div></t-col>
      <t-col span="12"><div class="demoCol">12</div></t-col>
    </t-row>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>

    <h3>设置 offset</h3>
    <p>
      <strong>预览</strong>
    </p>
    <t-row class="demoRow" gutter="10">
      <t-col span="2" offset="2"><div class="demoCol">2</div></t-col>
      <t-col span="20"><div class="demoCol">22</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4" offset="8"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
      <t-col span="4"><div class="demoCol">4</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="6"><div class="demoCol">6</div></t-col>
      <t-col span="6" offset="6"><div class="demoCol">6</div></t-col>
      <t-col span="6"><div class="demoCol">6</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="8"><div class="demoCol">8</div></t-col>
      <t-col span="8" offset="8"><div class="demoCol">8</div></t-col>
    </t-row>
    <t-row class="demoRow" gutter="10">
      <t-col span="12"><div class="demoCol">12</div></t-col>
      <t-col span="12"><div class="demoCol">12</div></t-col>
    </t-row>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
  import TCol from '../../../src/grid/col'
  import TRow from '../../../src/grid/row'

  export default {
    components: {
        TCol, TRow
    },
    data() {
      return {
        selected: '1',
        content: `
<t-row class="demoRow">
  <t-col span="2"><div class="demoCol">2</div></t-col>
  <t-col span="22"><div class="demoCol">22</div></t-col>
</t-row>
<t-row class="demoRow">
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
</t-row>
<t-row class="demoRow">
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
</t-row>
<t-row class="demoRow">
  <t-col span="8"><div class="demoCol">8</div></t-col>
  <t-col span="8"><div class="demoCol">8</div></t-col>
  <t-col span="8"><div class="demoCol">8</div></t-col>
</t-row>
<t-row class="demoRow">
  <t-col span="12"><div class="demoCol">12</div></t-col>
  <t-col span="12"><div class="demoCol">12</div></t-col>
</t-row>
        `,
        content2: `
<t-row class="demoRow" gutter="10">
  <t-col span="2"><div class="demoCol">2</div></t-col>
  <t-col span="22"><div class="demoCol">22</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="8"><div class="demoCol">8</div></t-col>
  <t-col span="8"><div class="demoCol">8</div></t-col>
  <t-col span="8"><div class="demoCol">8</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="12"><div class="demoCol">12</div></t-col>
  <t-col span="12"><div class="demoCol">12</div></t-col>
</t-row>
        `,
        content3: `
<t-row class="demoRow" gutter="10">
  <t-col span="2" offset="2"><div class="demoCol">2</div></t-col>
  <t-col span="20"><div class="demoCol">22</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4" offset="8"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
  <t-col span="4"><div class="demoCol">4</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="6"><div class="demoCol">6</div></t-col>
  <t-col span="6" offset="6"><div class="demoCol">6</div></t-col>
  <t-col span="6"><div class="demoCol">6</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="8"><div class="demoCol">8</div></t-col>
  <t-col span="8" offset="8"><div class="demoCol">8</div></t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="12"><div class="demoCol">12</div></t-col>
  <t-col span="12"><div class="demoCol">12</div></t-col>
</t-row>
        `,
      }
    }
  }
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
