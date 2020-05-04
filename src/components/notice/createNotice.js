import Vue from 'vue'

function CreateNotice (com, props) {
    if(typeof com !== 'object') {
        console.warn('确定传入的是组件？')
        return
    }
    // 构造函数
    const NoticeCtr =  Vue.extend(com)
    // 生成实例
    let instance = new NoticeCtr({
        propsData: props
    })
    // 挂载在body上
    document.body.appendChild(instance.$mount().$el)
}
export default CreateNotice