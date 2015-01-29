var PlayerStore = require("<scripts>/stores/PlayerStore")

var CameraStore = Reflux.createStore({
    data: {
        position: {
            x: 0,
            y: 0
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenTo(PlayerStore, function(data) {
            this.data.position.x = Math.roundToNearest(data.position.x, WIDTH)
            this.data.position.y = Math.roundToNearest(data.position.y, HEIGHT)
            this.retrigger()
        }.bind(this))
    }
})

module.exports = CameraStore
