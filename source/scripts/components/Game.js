var GameFrame = require("<scripts>/components/GameFrame")
var PlayView = require("<scripts>/components/PlayView")

var LoopStore = require("<scripts>/stores/LoopStore")
var PlayerActions = require("<scripts>/actions/PlayerActions")
var DialogueActions = require("<scripts>/actions/DialogueActions")

var Game = React.createClass({
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
            <GameFrame ratio="3x4" onClick={DialogueActions.EndDialogue}>
                <PlayView/>
            </GameFrame>
        )
    }
})

module.exports = Game
