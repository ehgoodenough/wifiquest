var ThingStore = require("<scripts>/stores/ThingStore")
var DialogueBox = require("<scripts>/components/DialogueBox")
var PlayerButtons = require("<scripts>/components/PlayerButtons")

var LoopStore = require("<scripts>/stores/LoopStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")
var DialogueActions = require("<scripts>/actions/DialogueActions")

var PlaythroughScreen = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    render: function() {
        return (
            <div className="playthrough screen"
                onClick={DialogueActions.EndDialogue}>
                {this.state.things}
                <PlayerButtons/>
                <DialogueBox/>
            </div>
        )
    }
})

module.exports = PlaythroughScreen
