var LoopActions = require("<scripts>/actions/LoopActions")
var DialogueActions = require("<scripts>/actions/DialogueActions")

var DialogueStore = Reflux.createStore({
    data: {
        active: false,
        ticks: 0,
        cursor: 0,
        text: "",
    },
    getData: function() {
        return this.data
    },
    listenables: [
        LoopActions,
        DialogueActions
    ],
    onBeginDialogue: function(text, speed) {
        this.data.active = true
        this.data.ticks = 0
        this.data.blip = 0
        this.data.maxtick = 0.075 / (speed || 1)
        
        this.data.text = text
        this.data.bliptext = []
        
        this.retrigger()
    },
    onEndDialogue: function() {
        this.data.active = false
        this.retrigger()
    },
    onTick: function(tick) {
        if(this.data.active) {
            this.data.ticks += tick
            if(this.data.ticks > this.data.maxtick) {
                this.data.ticks -= this.data.maxtick
                var blip = this.data.blip += 1
                this.data.bliptext = []
                for(var index in this.data.text) {
                    var text = this.data.text[index]
                    if(React.addons.TestUtils.isElement(text)) {
                        text = React.addons.cloneWithProps(text, {key: index})
                        text.props.children = text.props.children.substr(0, blip)
                        this.data.bliptext.push(text)
                        blip -= text.props.children.length
                    } else {
                        this.data.bliptext.push(text.substr(0, blip))
                        blip -= text.length
                    }
                    if(blip <= 0) {
                        break;
                    }
                }
                this.retrigger()
            }
        }
    }
})

module.exports = DialogueStore
