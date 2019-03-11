<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'TheOnenTabsPane',
        inject:['eventBus'],
        data(){
          return {
              active: false
          }
        },
        props:{
            name:{
                type: String|Number,
                required: true
            }
        },
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                if(name === this.name){

                    this.active = true
                }else{

                    this.active = false
                }
            })
        },
        computed:{
            classes(){
                return {
                    active: this.active
                }
            }
        }
    }
</script>
<style lang="scss" type="text/scss">
    .tabs-pane{
        &.active{
            padding: 2em;
        }
    }
</style>