<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-tabs :selected="selected">
      <t-tabs-head>
        <t-tabs-item name="1">1</t-tabs-item>
        <t-tabs-item name="2">2</t-tabs-item>
      </t-tabs-head>
      <t-tabs-body>
        <t-tabs-pane name="1">content 1</t-tabs-pane>
        <t-tabs-pane name="2">content 2</t-tabs-pane>
      </t-tabs-body>
    </t-tabs>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import TTabs from '../../../src/tabs/tabs'
  import TTabsHead from '../../../src/tabs/tabs-head'
  import TTabsBody from '../../../src/tabs/tabs-body'
  import TTabsItem from '../../../src/tabs/tabs-item'
  import TTabsPane from '../../../src/tabs/tabs-pane'

  export default {
    components: {
        TTabs, TTabsHead, TTabsBody, TTabsItem, TTabsPane,
    },
    data() {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }
          <t-tabs :selected="selected">
            <t-tabs-head>
              <t-tabs-item name="1">1</t-tabs-item>
              <t-tabs-item name="2">2</t-tabs-item>
            </t-tabs-head>
            <t-tabs-body>
              <t-tabs-pane name="1">content 1</t-tabs-pane>
              <t-tabs-pane name="2">content 2</t-tabs-pane>
            </t-tabs-body>
          </t-tabs>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss">

</style>