var Camera = require("<scripts>/components/Camera")
var GameFrame = require("<scripts>/components/GameFrame")

var PlayerStore = require("<scripts>/stores/PlayerStore")
var PlayerButton = require("<scripts>/components/PlayerButton")

var ThingStore = require("<scripts>/stores/ThingStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    render: function() {
        return (
            <GameFrame>
                {this.state.things}
                <PlayerButton/>
            </GameFrame>
        )
    }
})

module.exports = Game
