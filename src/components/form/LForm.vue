<template>
    <div class="l-form">
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                lForm: this
            }
        },
        name: 'LForm',
        props: {
            model: Object,
            rules: Object,
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            validate (cb) {
                let tasks = this.$children
                    .filter(com => com.prop)
                    .map(com => {
                        return com.checkValue()
                    })
                Promise.all(tasks)
                    .then(() => {
                        cb && cb(true)
                    })
                    .catch(() => {
                        cb && cb(false)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>