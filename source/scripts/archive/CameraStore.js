var PlayerStore = require("<scripts>/stores/PlayerStore")

var CameraStore = Reflux.createStore({
    data: {
        x: 0,
        y: 0,
        sx: 0,
        sy: 0
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenTo(PlayerStore, function(data) {
            this.data.sx = Math.floor(data.x / WIDTH)
            this.data.sy = Math.floor(data.y / HEIGHT)
            this.data.x = this.data.sx * WIDTH * -1
            this.data.y = this.data.sy * HEIGHT * -1
            this.retrigger()
        }.bind(this))
    }
})

module.exports = CameraStore
