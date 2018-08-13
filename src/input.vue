<template>
    <div>
        <input type="text" :disabled="disabled"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
               :readonly="readonly"
               :value="value">
        <span class="errorMessage"><svg ><use :xlink:href="'#i-error'"></use></svg>{{error}}</span>
    </div>

</template>
<script>
    export default{
        props:{
            value: '',
            disabled: false,
            readonly: true,
            error: '',
            args:{}
        }
    }
</script>
<style>

</style>