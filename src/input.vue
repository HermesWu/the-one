<template>
    <div class="wrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="errorIcon"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>
<script>
    import Icon from './icon'
    export default{
        components: {Icon},
        props: {
            value:{
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly:{
                type: Boolean,
                default: false
            },
            error:{
                type: String
            }
        }
    }
</script>
<style type="text/scss" lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper{
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        :not(:last-child){margin-right: .5em};
        &.error{
            >input{border-color: $red}
        }
        >input{
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled], &[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        > .errorIcon{
            fill: $red;
        }
        .errorMessage{
            color: $red;
        }
    }
</style>