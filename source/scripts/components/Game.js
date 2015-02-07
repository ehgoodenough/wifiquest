var GameFrame = require("<scripts>/components/GameFrame")
var DialogueBox = require("<scripts>/components/DialogueBox")
var PlayerButtons = require("<scripts>/components/PlayerButtons")

var ThingStore = require("<scripts>/stores/ThingStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")
var DialogueActions = require("<scripts>/actions/DialogueActions")

var Game = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    componentDidMount: function() {
        Hammer.on("swipeleft", function(event) {
            PlayerActions.MovePlayerToNextScene()
        })
        Hammer.on("swiperight", function(event) {
            PlayerActions.MovePlayerToPreviousScene()
        })
        //Hammer.on("doubletap", function(event) {
        //    Screenfull.toggle()
        //})
    },
    render: function() {
        return (
            <GameFrame onClick={this.handleClick}>
                {this.state.things}
                <PlayerButtons/>
                <DialogueBox/>
            </GameFrame>
        )
    },
    handleClick: function() {
        DialogueActions.EndDialogue()
    }
})

module.exports = Game
