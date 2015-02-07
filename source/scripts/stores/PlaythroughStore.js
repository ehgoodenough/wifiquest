var PlaythroughActions = require("<scripts>/actions/PlaythroughActions")

var PlaythroughStore = Reflux.createStore({
    data: {
        dialogue: undefined
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlaythroughActions
    ],
    onBeginDialogue: function(dialogue) {
        console.log(dialogue)
    }
})

module.exports = PlaythroughStore
