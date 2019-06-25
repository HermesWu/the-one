<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <t-slides  class="wrapper"  :selected.sync="selected">
      <t-slides-item  name="1"><div class="box">1</div></t-slides-item>
      <t-slides-item  name="2"><div class="box">2</div></t-slides-item>
      <t-slides-item  name="3"><div class="box">3</div></t-slides-item>
    </t-slides>

    <p>
      <strong>示例代码：</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import TSlides from '../../../src/slides/slides'
  import TSlidesItem from '../../../src/slides/slides-item'
  export default {
    components: {
      TSlides,
      TSlidesItem
    },
    data () {
      return {
        selected: '1',
        content: `
<t-slides  class="wrapper"  :selected.sync="selected">
  <t-slides-item  name="1"><div class="box">1</div></t-slides-item>
  <t-slides-item  name="2"><div class="box">2</div></t-slides-item>
  <t-slides-item  name="3"><div class="box">3</div></t-slides-item>
</t-slides>
              `
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  body {
    .content:not(.custom) {
      max-width: 740px;
      margin: 0 auto;
      padding: 0;
    }
    .content:not(.custom) > h1:first-child{
      margin-top: 0;
    }
    .box {
      /*width: 600px;*/
      min-width: 100%;
      height: 350px;
      background: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
