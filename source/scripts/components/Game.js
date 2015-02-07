var GameFrame = require("<scripts>/components/GameFrame")

var PlayerStore = require("<scripts>/stores/PlayerStore")
var PlayerButtons = require("<scripts>/components/PlayerButtons")

var ThingStore = require("<scripts>/stores/ThingStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(ThingStore, "things")
    ],
    render: function() {
        return (
            <GameFrame>
                {this.state.things}
                <PlayerButtons/>
            </GameFrame>
        )
    }
})

module.exports = Game
