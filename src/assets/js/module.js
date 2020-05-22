var ash = 'ash'

function changeAsh (val) {
    ash = val
}
let control = {
    changeAsh: changeAsh,
    getAsh: function () {
        return ash
    }
}
module.exports = control