<template>
    <div class="tabs-item" @click="clicked" :class="classes" :data-name="name">
        <!--<g-icon class="center" name="settings"></g-icon>-->
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenTabsItem',
        inject: ['eventBus'],
        data(){
            return {
                active: false
            }
        },
        props:{
            disabled:{
                type: Boolean,
                default: false
            },
            name: {
                type: String|Number,
                required: true
            }
        },
        mounted(){
            if(this.eventBus){
                this.eventBus.$on('update:selected', (name, vm)=>{
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            clicked(){
                if(this.disabled){return}
                this.eventBus&&this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)

            }
        },
        computed:{
            classes(){
                return{
                    active: this.active,
                    disabled: this.disabled
                }
            }
        }

    }
</script>
<style lang="scss" type="text/scss">
    $blue: blue;
    .tabs-item{
        display: flex;
        padding: 0 2em;
        align-items: center;
        height: 100%;
        cursor: pointer;
        &.active{
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            color: gray;
            cursor: not-allowed;
        }
        > .center{
            vertical-align:middle;
        }

    }
</style>