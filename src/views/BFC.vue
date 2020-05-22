<template>
    <div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: 'BFC',
        data () {
            return {
                name: ''
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
.left {
    background: yellow;
    width: 20%;
    height: 100px;
    position: relative;
}
.right {
    background: blue;
    height: 200px;
    width: 50%;
    display: inline-block;
}
</style>