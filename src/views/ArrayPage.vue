<template>
    <div>
        <h1>测试set数组</h1>
        <ul>
            <li v-for="(item ,index) in listData" :key="index" class="line">
                <p>{{ item.name }}</p>
                <p>
                    <span>value:{{ item.value }}</span>
                    <span>选中状态: {{ item.checked }}</span>
                </p>
                <button v-show="!item.checked" @click="checked(item, index)">选中</button>
                <button v-show="item.checked" @click="cancelChecked(item, index)">取消选中</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ArrayPage',
        data () {
            return {
                listData: []
            }
        },
        methods: {
            getData () {
                let listData = [];
                for(let i = 0; i < 10; i++) {
                    listData.push({
                        name: 'list-' + i,
                        value: i
                    })
                }
                setTimeout(() => {
                    
                    // 写法1
                    // listData.forEach(item => {
                    //     item.checked = false
                    // })
                    // this.listData = listData;
                    // 写法2
                    // this.listData = listData;
                    // this.listData.forEach(item => {
                    //     item.checked = false
                    // })
                    // 写法3
                    // this.listData = listData;
                    // this.listData.forEach(item => {
                    //     item.checked = false
                    // })
                }, 1000)
            },
            checked (item, index) {
                // console.log(item)
                item.checked = true;
                console.log(index, index)
                // 写法2
                // this.$set(this.listData, index, item)
                // 写法3
                this.listData.splice(index, 1, item)
            },
            cancelChecked (item, index){
                // console.log(item)
                item.checked = false;
                // 写法2
                // this.$set(this.listData, index, item)
                // 写法3
                this.listData.splice(index, 1, item)
            }
        },
        created () {
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
.line {
    border-bottom: 1px solid gray;
}
</style>