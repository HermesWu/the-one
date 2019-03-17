<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <h3>使用方法</h3>
        <pre>
        <code>{{content}}</code>
    </pre>
    </div>


</template>
<script>
    import Button from '../../../src/button'
    export default{
        components: {
            'g-button': Button
        },
        data(){
            return{
                content:`
                <g-button>默认按钮</g-button>
                <g-button icon="settings">默认按钮</g-button>
                <g-button :loading="true">默认按钮</g-button>
                <g-button disabled>默认按钮</g-button>
                `
            }
        }
    }
</script>
<style lang="scss" >
    body .content:not(.custom) {
        max-width: 740px;
        margin: 0 auto;
        padding: 0;
    }
</style>
