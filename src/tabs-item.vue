<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <g-icon class="center" name="settings"></g-icon>
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
            this.eventBus.$on('update:selected', (name, vm)=>{
                if(name === this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        methods: {
            xxx(){
                this.eventBus.$emit('update:selected', this.name, this)
            }
        },
        computed:{
            classes(){
                return{
                    active: this.active
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
        > .center{
            vertical-align:middle;
        }

    }
</style>