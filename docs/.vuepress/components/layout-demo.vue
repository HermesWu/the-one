<template>
  <div style="padding-top: 16px;">
    <h2>基本布局1</h2>

    <p>
      <strong>预览</strong>
    </p>
   <t-layout>
     <t-header style="height: 50px; background:lightskyblue;">header</t-header>
     <t-content style="height: 100px; background:deepskyblue;">content</t-content>
     <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
   </t-layout>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <h2>基本布局2</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-layout  style="color: white; overflow:hidden; margin-bottom:50px;">
      <t-header style="height: 50px; background:lightskyblue;">header</t-header>
      <t-layout>
        <t-sider style="height: 100px; width:200px;background:#ddd;">sider</t-sider>
        <t-content style="height: 100px; background:deepskyblue;">content</t-content>
      </t-layout>
      <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
    </t-layout>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>

    <h2>基本布局3</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-layout  style="color: white; overflow:hidden; margin-bottom:50px;">
      <t-sider style=" width:200px;background:#ddd;">sider</t-sider>
      <t-layout>
        <t-header style="height: 50px; background:lightskyblue;">header</t-header>
        <t-content style="height: 100px; background:deepskyblue;">content</t-content>
        <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
      </t-layout>
    </t-layout>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
  import TContent from '../../../src/layout/content'
  import THeader from '../../../src/layout/header'
  import TLayout from '../../../src/layout/layout'
  import TFooter from '../../../src/layout/footer'
  import TSider from '../../../src/layout/sider'

  export default {
    components: {
        TContent, THeader, TLayout, TFooter, TSider,
    },
    data() {
      return {
        content: `
          <t-layout>
            <t-header style="height: 50px; background:lightskyblue;">header</t-header>
            <t-content style="height: 50px; background:deepskyblue;">content</t-content>
            <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
          </t-layout>
        `.replace(/^ {8}/gm, '').trim(),
        content2: `
          <t-layout  style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-header style="height: 50px; background:lightskyblue;">header</t-header>
            <t-layout>
              <t-sider style="height: 100px; width:200px;background:#ddd;">sider</t-sider>
              <t-content style="height: 100px; background:deepskyblue;">content</t-content>
            </t-layout>
            <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
          </t-layout>
        `.replace(/^ {8}/gm, '').trim(),
        content3: `
          <t-layout  style="color: white; overflow:hidden; margin-bottom:50px;">
            <t-sider style=" width:200px;background:#ddd;">sider</t-sider>
            <t-layout>
              <t-header style="height: 50px; background:lightskyblue;">header</t-header>
              <t-content style="height: 100px; background:deepskyblue;">content</t-content>
              <t-footer style="height: 50px; background:lightskyblue;">footer</t-footer>
            </t-layout>
          </t-layout>
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>