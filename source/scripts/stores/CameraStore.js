var PlayerStore = require("<scripts>/stores/PlayerStore")

var CameraStore = Reflux.createStore({
    data: {
        x: 0,
        y: 0
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenTo(PlayerStore, function(data) {
            this.data.x = Math.floor(data.x / WIDTH) * WIDTH * -1
            this.data.y = Math.floor(data.y / HEIGHT) * HEIGHT * -1
            this.retrigger()
        }.bind(this))
    }
})

module.exports = CameraStore
