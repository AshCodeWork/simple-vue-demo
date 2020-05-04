<template>
    <div class="form-demo">
        <l-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
        >
            <l-form-item prop="name" label="用户名">
                <l-input
                    :placeholder="'请输入用户名'"
                    v-model="ruleForm.name"
                ></l-input>
            </l-form-item>
            <l-form-item prop="password" label="密码">
                <l-input
                    :placeholder="'请输入密码'"
                    type="password"
                    v-model="ruleForm.password"
                ></l-input>
            </l-form-item>
            <l-form-item>
                <button @click="onSubmit">提交</button>
            </l-form-item>
        </l-form>
    </div>
</template>

<script>
import LForm from './LForm.vue';
import LFormItem from './LFormItem.vue';
import LInput from './LInput.vue';
export default {
    name: 'FormDemo',
    components: {
        LForm,
        LFormItem,
        LInput,
    },
    data() {
        return {
            ruleForm: {
                name: 'ash',
                password: '',
            },
            rules: {
                name: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ],
            },
        };
    },
    methods: {
        onSubmit(event) {
			event.preventDefault()
            this.$refs['ruleForm'].validate((valid) => {
				console.log(valid)
                if (valid) {
					// alert('请求登录!');
					this.$notice({
						msg: '请求登录!',
						type: 'success'
					})
                } else {
					// alert('校验失败!');
					this.$notice({
						msg: '校验失败!',
						type: 'warning'
					})
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
