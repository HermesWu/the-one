<template>
    <div style="padding-top: 16px;">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div style="margin: 20px">
            <t-pager :totalPage="20" :currentPage.sync="currentPage" />
        </div>
        <p>当前选择页数：{{ currentPage }}</p>

        <p>
            <strong>示例代码：</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import TPager from '../../../src/pager/pager'
    export default {
        components: {
            TPager
        },
        data () {
            return {
                currentPage: 10,
                content: `
<div style="margin: 20px">
  <t-pager :totalPage="20" :currentPage.sync="currentPage" />
</div>
<p>当前选择页数：{{ currentPage }}</p>
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
    }
</style>
