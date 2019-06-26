<template>
    <div style="padding-top: 16px;">
        <h2>基本用法</h2>
        <h3>水平导航</h3>
        <p>
            <strong>预览</strong>
        </p>
        <t-nav :selected.sync="selected2">
            <t-nav-item name="home">首页</t-nav-item>
            <t-sub-nav name="about">
                <template slot="title">关于</template>
                <t-nav-item name="culture">企业文化</t-nav-item>
                <t-nav-item name="developers">开发团队</t-nav-item>
                <t-sub-nav name="contacts">
                    <template slot="title">联系方式</template>
                    <t-nav-item name="wechat">微信</t-nav-item>
                    <t-nav-item name="qq">qq</t-nav-item>
                    <t-sub-nav name="phone">
                        <template slot="title">手机</template>
                        <t-nav-item name="cm">移动</t-nav-item>
                        <t-nav-item name="cu">联通</t-nav-item>
                        <t-nav-item name="cn">电信</t-nav-item>
                    </t-sub-nav>
                </t-sub-nav>
            </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
        </t-nav>
        <p>用户选择了{{selected2}}</p>

        <p>
            <strong>示例代码：</strong>
        </p>
        <pre><code>{{content2}}</code></pre>
        <h3>竖直导航</h3>
        <p>
            <strong>预览</strong>
        </p>
        <t-nav :selected.sync="selected" vertical style="width:200px;margin:20px;">
            <t-nav-item name="home">首页</t-nav-item>
            <t-sub-nav name="about">
                <template slot="title">关于</template>
                <t-nav-item name="culture">企业文化</t-nav-item>
                <t-nav-item name="developers">开发团队</t-nav-item>
                <t-sub-nav name="contacts">
                    <template slot="title">联系方式</template>
                    <t-nav-item name="wechat">微信</t-nav-item>
                    <t-nav-item name="qq">qq</t-nav-item>
                    <t-sub-nav name="phone">
                        <template slot="title">手机</template>
                        <t-nav-item name="cm">移动</t-nav-item>
                        <t-nav-item name="cu">联通</t-nav-item>
                        <t-nav-item name="cn">电信</t-nav-item>
                    </t-sub-nav>
                </t-sub-nav>
            </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
        </t-nav>
        <p>用户选择了{{selected}}</p>

        <p>
            <strong>示例代码：</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import TNav from '../../../src/nav/nav'
    import TNavItem from '../../../src/nav/nav-item'
    import TSubNav from '../../../src/nav/sub-nav'

    export default {
        components: {
            TNav,
            TNavItem,
            TSubNav
        },
        data () {
            return {
                selected: 'developers',
                selected2: 'developers',
                content: `
<t-nav :selected.sync="selected" vertical style="width:200px;margin:20px;">
    <t-nav-item name="home">首页</t-nav-item>
    <t-sub-nav name="about">
        <template slot="title">关于</template>
        <t-nav-item name="culture">企业文化</t-nav-item>
        <t-nav-item name="developers">开发团队</t-nav-item>
        <t-sub-nav name="contacts">
            <template slot="title">联系方式</template>
            <t-nav-item name="wechat">微信</t-nav-item>
            <t-nav-item name="qq">qq</t-nav-item>
            <t-sub-nav name="phone">
                <template slot="title">手机</template>
                <t-nav-item name="cm">移动</t-nav-item>
                <t-nav-item name="cu">联通</t-nav-item>
                <t-nav-item name="cn">电信</t-nav-item>
            </t-sub-nav>
        </t-sub-nav>
    </t-sub-nav>
    <t-nav-item name="hire">招聘</t-nav-item>
</t-nav>
<p>用户选择了{{selected}}</p>
              `,
                content2:`
<t-nav :selected.sync="selected2">
    <t-nav-item name="home">首页</t-nav-item>
    <t-sub-nav name="about">
        <template slot="title">关于</template>
        <t-nav-item name="culture">企业文化</t-nav-item>
        <t-nav-item name="developers">开发团队</t-nav-item>
        <t-sub-nav name="contacts">
            <template slot="title">联系方式</template>
            <t-nav-item name="wechat">微信</t-nav-item>
            <t-nav-item name="qq">qq</t-nav-item>
            <t-sub-nav name="phone">
                <template slot="title">手机</template>
                <t-nav-item name="cm">移动</t-nav-item>
                <t-nav-item name="cu">联通</t-nav-item>
                <t-nav-item name="cn">电信</t-nav-item>
            </t-sub-nav>
        </t-sub-nav>
    </t-sub-nav>
    <t-nav-item name="hire">招聘</t-nav-item>
</t-nav>
<p>用户选择了{{selected2}}</p>
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
