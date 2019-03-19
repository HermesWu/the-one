<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-input></t-input>
    <t-input value="中文"></t-input>
    <t-input value="中文" disabled></t-input>
    <t-input value="中文" readonly></t-input>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-input v-model="value"></t-input>
    <div>value: {{ value }}</div>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>
<script>
  import TInput from '../../../src/input/input'

  export default {
    components: {
        TInput
    },
    data() {
      return {
        value: '中文',
        content: `
          <t-input></t-input>
          <t-input value="中文"></t-input>
          <t-input value="中文" disabled></t-input>
          <t-input value="中文" readonly></t-input>
        `.replace(/^ {8}/gm, '').trim(),
        content2: `
          data:{
            value: '中文'
          }
          <t-input v-model="value"></t-input>
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>
<style lang="scss">

</style>