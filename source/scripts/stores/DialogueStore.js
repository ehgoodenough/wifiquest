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
        this.data.speaking = true
        this.data.ticks = 0
        this.data.blip = 0
        this.data.maxtick = 0.05 / (speed || 1)
        
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
                if(this.data.speaking) {
                    var blip = this.data.blip += 1
                    this.data.bliptext = []
                    var newchar = ""
                    for(var index in this.data.text) {
                        var text = this.data.text[index]
                        if(React.addons.TestUtils.isElement(text)) {
                            text = React.addons.cloneWithProps(text, {key: index})
                            var length = text.props.children.length
                            text.props.children = text.props.children.substr(0, blip)
                            if(text.props.children) {
                                newchar = text.props.children.charAt(text.props.children.length - 1)
                            }
                            this.data.bliptext.push(text)
                            blip -= length
                        } else {
                            var length = text.length
                            text = text.substr(0, blip)
                            if(text) {
                                newchar = text.charAt(text.length - 1)
                            }
                            this.data.bliptext.push(text)
                            blip -= length
                        }
                    }
                    if(blip >= 0) {
                        this.data.speaking = false
                    }
                    if(!new RegExp(/(\s)/).test(newchar)) {
                        var sound = new Audio("./assets/sounds/blip" + Math.floor(Math.random()*2) + ".wav")
                        sound.volume = 0.25
                        sound.play()
                    }
                    this.retrigger()
                }
            }
        }
    }
})

module.exports = DialogueStore
