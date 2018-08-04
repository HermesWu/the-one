<template>
    <button class="g-button" :class="iconPosition">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
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
<style type="text/scss" lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
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
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg)
        }
        &:focus {
            outline: none;
        }
        .icon {
            width: 1em;
            height: 1em;
        }

    }
</style>