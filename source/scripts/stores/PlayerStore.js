var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        position: {
            x: 0,
            y: 11
        }
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onSetPlayerPosition: function(position) {
        this.data.position = position
        this.retrigger()
    },
    onIncrementPlayerPosition: function(position) {
        var scene = Math.floor(this.data.position.x / WIDTH) + 1
        if(scene > 3 - 1) {
            scene = 3 - 1
        }
        this.data.position.x = scene * WIDTH
        this.retrigger()
    }
})

module.exports = PlayerStore
