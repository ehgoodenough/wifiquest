var DialogueActions = require("<scripts>/actions/DialogueActions")

var DialogueStore = Reflux.createStore({
    data: undefined,
    getData: function() {
        return this.data
    },
    listenables: [
        DialogueActions
    ],
    onBeginDialogue: function(dialogue) {
        this.data = dialogue
        this.retrigger()
    },
    onEndDialogue: function() {
        this.data = undefined
        this.retrigger()
    }
})

module.exports = DialogueStore
