<template>
    <button class="g-button" @click="$emit('click')" :class="iconPosition">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from '../icon'
    export default {
        components: {
          'g-icon': Icon
        },
        props: {
            icon: {},
            loading: {
              type: Boolean,
              default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style type="text/scss" lang="scss" scoped>
    @import '../../styles/var';
    @keyframes spin{
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    .g-button {
        display: inline-flex;
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &.left {
            > .icon {
                order: 1;
                margin-right: .3em;
            }
            .content {
                order: 2;
            }
        }
        &.right {
            > .icon {
                order: 2;
                margin-right: 0em;
                margin-left: .3em;
            }
            .content {
                order: 1
            }
        }
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background: $button-active-bg
        }
        &:focus {
            outline: none;
        }
        > .loading{
            @include spin;
        }

    }
</style>