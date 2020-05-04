<template>
    <div class="notice">
        <div class="content" :class="{
            'warning': type === 'warning',
            'success': type === 'success'
        }">
            <span>{{ msg }}</span><span class="close" @click="close">+</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        props: {
            msg: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'warning'
            }
        },
        methods: {
            close () {
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }
        }
    }
</script>

<style scoped>
.content {
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background: white;
    /* border: 1px solid black; */
    position: fixed;
    top: 20px;
    left: 20%;
    -moz-box-shadow:0px 8px 16px rgba(0,0,0,0.2); 
    -webkit-box-shadow:0px 8px 16px rgba(0,0,0,0.2); 
    box-shadow:0px 8px 16px rgba(0,0,0,0.2);
}
.warning {
    color:#E6A23C;
    background: #fcf6ed;
}
.success {
    color:#67C23A;
    background: #f2f9ea;
}
.close {
    position: absolute;
    right: 10px;
    display: inline-block;
    transform: rotate(45deg);
    width: 20px;
    height: 20px;
}
</style>
