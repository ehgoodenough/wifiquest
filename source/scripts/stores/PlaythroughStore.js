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
        this.dialogue = dialogue
    },
    onEndDialogue: function() {
        this.dialogue = undefined
    }
})

module.exports = PlaythroughStore
