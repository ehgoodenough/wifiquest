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
        console.log(this.data)
        this.retrigger()
    }
})

module.exports = PlayerStore
