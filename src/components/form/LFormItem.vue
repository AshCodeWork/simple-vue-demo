<template>
    <div class="l-form-item">
        <label v-if="label">{{ label }}</label>
        <slot></slot>
        <p v-show="error" class="error">{{ error }}</p>
    </div>
</template>

<script>
    import schema from 'async-validator';
    export default {
        provide () {
            return {
                lFormItem: this,
            }
        },
        inject: ['lForm'],
        name: 'LFormItem',
        data() {
            return {
                error: ''
            }
        },
        props: {
            prop: {
                type: String,
            },
            label: {// 输入项标签 
                type: String,
                default: ''
            }
        },
        methods: {
            checkValue () {
                if(!this.prop) {
                    console.log('prop 为空')
                    return;
                }
                let field = this.prop;
                let descriptor = {[field]:this.lForm.rules[field]}
                let validator = new schema(descriptor);
                
                return validator.validate({ [field]: this.lForm.model[field]}, (errors, fields) => {
                    console.log('error', errors)
                    if(errors && errors.length) {
                        this.error = errors[0].message;
                    } else {
                        this.error = ''
                    }
                    // console.log('fields', fields)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.error {
    color: red;
    font-size: 14px;
}
</style>