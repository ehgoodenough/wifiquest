var GameFrame = require("<scripts>/components/GameFrame")
var DialogueBox = require("<scripts>/components/DialogueBox")
var PlayerButtons = require("<scripts>/components/PlayerButtons")

var ThingStore = require("<scripts>/stores/ThingStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")

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
    },
    render: function() {
        return (
            <GameFrame ratio="3x4">
                {this.state.things}
                <PlayerButtons/>
                <DialogueBox/>
            </GameFrame>
        )
    }
})

module.exports = Game
