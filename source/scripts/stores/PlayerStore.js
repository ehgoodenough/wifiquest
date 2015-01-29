var PlayerActions = require("<scripts>/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        position: 0
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
    onMovePlayerToNextScene: function(position) {
        this.data.position = Math.floor((this.data.position + WIDTH) / WIDTH) * WIDTH
        if(this.data.position >= WIDTH * (3 - 1)) {
            this.data.position = WIDTH * (3 - 1)
        }
        this.retrigger()
    }
})

module.exports = PlayerStore
