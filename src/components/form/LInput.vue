<template>
    <div>
        <input :value="value" :type="type" v-bind="$attrs" @input="handleInput" @change="handleChange"/>
    </div>
</template>

<script>
    export default {
        name: 'LInput',
        inheritAttrs: false,
        inject: {
            lForm: {
                default: ''
            },
            lFormItem: {
                default: ''
            }
        },
        data () {
            return {
                error: ''
            }
        },
        props: {
            type: {
                type: String,
                default:'text'
            },
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleInput (event) {
                this.$emit('input', event.target.value);
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
                this.$parent.checkValue();
            }
        },
        mounted () {
        }
    }
</script>

<style lang="scss" scoped>

</style>
