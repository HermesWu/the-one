<template>
    <div style="padding-top: 16px;">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <t-button>默认按钮</t-button>
        <t-button icon="settings">默认按钮</t-button>
        <t-button :loading="true">默认按钮</t-button>
        <t-button disabled>默认按钮</t-button>

        <p>
            <strong>示例代码：</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'
    export default {
        components: {
            't-button': Button
        },
        data () {
            return {
                content: `
                  import Button from '../../../src/button/button'

                  components: {'t-button': Button}

                  <t-button>默认按钮</t-button>
                  <t-button icon="settings">默认按钮</t-button>
                  <t-button :loading="true">默认按钮</t-button>
                  <t-button disabled>默认按钮</t-button>
              `.replace(/\t+| +/g, '').trim()
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