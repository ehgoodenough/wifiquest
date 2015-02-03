var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 0,
        y: 11
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onMovePlayerToNextScene: function() {
        var scene = Math.floor(this.data.x / WIDTH) + 1
        if(scene > 3 - 1) {scene = 3 - 1}
        this.data.x = scene * WIDTH
        this.retrigger()
    },
    onMovePlayerToPreviousScene: function() {
        var scene = Math.floor(this.data.x / WIDTH) - 1
        if(scene < 0) {scene = 0}
        this.data.x = scene * WIDTH
        this.retrigger()
    }
})

module.exports = PlayerStore
